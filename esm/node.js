import {
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  DOCUMENT_NODE,
  DOCUMENT_FRAGMENT_NODE,
  DOM
} from './constants.js';

import {EventTarget, NodeList} from './interfaces.js';
import {ChildNode, NonDocumentTypeChildNode, ParentNode} from './mixins.js';

import {
  String,
  findNext,
  getBoundaries,
  getEnd,
  // invalidate
} from './utils.js';

/**
 * @implements globalThis.Node
 */
export class Node extends EventTarget {

  static get ELEMENT_NODE() { return ELEMENT_NODE; }
  static get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  static get TEXT_NODE() { return TEXT_NODE; }
  static get COMMENT_NODE() { return COMMENT_NODE; }
  static get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  static get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }

  constructor(ownerDocument, localName, nodeType) {
    super();

    /**
     * @type {Document}
     */
    this.ownerDocument = ownerDocument;

    /**
     * @type {string}
     */
    this.localName = localName;

    /**
     * @type {number}
     */
    this.nodeType = nodeType;

    /**
     * @type {Element?}
     */
    this.parentNode = null;

    this._prev = null;
    this._next = null;
  }

  // <ChildNode>
  before(...nodes) {
    ChildNode.before(this, nodes);
  }

  after(...nodes) {
    ChildNode.after(this, nodes);
  }

  replaceWith(...nodes) {
    ChildNode.replaceWith(this, nodes);
  }

  remove() {
    ChildNode.remove(this);
  }
  // </ChildNode>

  get [DOM]() { return true; }

  // <to-be-overwritten>
  get childNodes() { return []; }
  get firstChild() { return null; }
  get lastChild() { return null; }
  get nextSibling() { return null; }
  get previousSibling() { return null; }
  get nextElementSibling() { return null; }
  get previousElementSibling() { return null; }
  normalize() {}
  hasChildNodes() { return false; }
  insertBefore() { throw new Error('invalid operation'); }
  appendChild() { throw new Error('invalid operation'); }
  replaceChild() { throw new Error('invalid operation'); }
  removeChild() { throw new Error('invalid operation'); }
  // </to-be-overwritten>

  get isConnected() {
    const {ownerDocument} = this;
    let {parentNode} = this;
    while (parentNode) {
      if (parentNode === ownerDocument)
        return true;
      parentNode = parentNode.parentNode;
    }
    return false;
  }

  /**
   * @type {Element?}
   */
  get parentElement() {
    let {parentNode} = this;
    if (parentNode) {
      switch (parentNode.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          return null;
      }
    }
    return parentNode;
  }

  // it's huge, but it should never suffer a maximum callstack issue
  /**
   * @param {boolean?} deep
   * @returns {Node}
   */
  cloneNode(deep = false) {
    /* c8 ignore start */
    const {ownerDocument, nodeType, localName} = this;
    switch (nodeType) {
      case ELEMENT_NODE:
        const addNext = _next => {
          _next.parentNode = parentNode;
          _next._prev = $next;
          $next = ($next._next = _next);
        };
        const clone = ownerDocument.createElement(localName);
        let parentNode = clone, $next = clone;
        let {_next, _end} = this;
        while (_next !== _end && (deep || _next.nodeType === ATTRIBUTE_NODE)) {
          switch (_next.nodeType) {
            case ELEMENT_NODE_END:
              parentNode._end._prev = $next;
              $next = ($next._next = parentNode._end);
              parentNode = parentNode.parentNode;
              break;
            case ELEMENT_NODE:
              const node = ownerDocument.createElement(_next.localName);
              addNext(node);
              parentNode = node;
              break;
            case ATTRIBUTE_NODE:
              const attribute = ownerDocument.createAttribute(_next.name);
              attribute.value = _next.value;
              addNext(attribute);
              break;
            case TEXT_NODE:
              addNext(ownerDocument.createTextNode(_next.textContent));
              break;
            case COMMENT_NODE:
              addNext(ownerDocument.createComment(_next.textContent));
              break;
          }
          _next = _next._next;
        }
        clone._end._prev = $next;
        $next._next = clone._end;
        return clone;
      case TEXT_NODE:
        return ownerDocument.createTextNode(this.textContent);
      case COMMENT_NODE:
        return ownerDocument.createComment(this.textContent);
      case ATTRIBUTE_NODE:
        const attribute = ownerDocument.createAttribute(this.name);
        attribute.value = this.value;
        return attribute;
      default:
        const fragment = ownerDocument.createDocumentFragment();
        fragment.append(...this.childNodes.map(child => child.cloneNode(deep)));
        return fragment;
    }
    /* c8 ignore stop */
  }

  /**
   * @returns {Node}
   */
  getRootNode() {
    let root = this;
    while (root.parentNode)
      root = root.parentNode;
    return root.nodeType === DOCUMENT_NODE ? root.root : root;
  }

  /**
   * @type {Node}
   * @returns {boolean}
   */
  isEqualNode(node) {
    /* c8 ignore start */
    const {nodeType} = this;
    if (nodeType === node.nodeType) {
      switch (nodeType) {
        case ELEMENT_NODE:
        case ATTRIBUTE_NODE:
        case TEXT_NODE:
        case COMMENT_NODE:
          return this.toString() === node.toString();
        default:
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node, i) => node.isEqualNode(bNodes[i]));
      }
    }
    return false;
    /* c8 ignore stop */
  }

  // meh
  /**
   * @type {Node}
   */
  isSameNode(node) {
    return this === node;
  }
}

const getChildNodes = element => {
  const childNodes = new NodeList;
  let {_next, _end} = findNext(element);
  while (_next !== _end) {
    childNodes.push(_next);
    _next = getEnd(_next)._next;
  }
  return childNodes;
};

export class NodeElement extends Node {

  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    // invalidate(this);
  }

  get childNodes() {
    return getChildNodes(this);
    // return this._childNodes || (this._childNodes = getChildNodes(this));
  }

  // <ParentNode>
  get children() {
    return ParentNode.children(this);
    // return this._children || (this._children = ParentNode.children(this));
  }

  /**
   * @returns {Element?}
   */
  get firstElementChild() {
    return ParentNode.firstElementChild(this);
  }

  /**
   * @returns {Element?}
   */
  get lastElementChild() {
    return ParentNode.lastElementChild(this);
  }

  /**
   * @returns {number}
   */
  get childElementCount() {
    return ParentNode.childElementCount(this);
  }

  /**
   * @param  {Node[]} nodes 
   */
  prepend(...nodes) {
    return ParentNode.prepend(this, nodes);
  }

  /**
   * @param  {Node[]} nodes 
   */
  append(...nodes) {
    return ParentNode.append(this, nodes);
  }

  /**
   * @param  {Node[]} nodes 
   */
  replaceChildren(...nodes) {
    return ParentNode.replaceChildren(this, nodes);
  }
  // </ParentNode>

  /**
   * @type {Node?}
   */
  get firstChild() {
    const {_next, _end} = findNext(this);
    return _next === _end ? null : _next;
  }

  /**
   * @type {Node?}
   */
  get lastChild() {
    const {_prev} = this._end;
    switch (_prev.nodeType) {
      case ELEMENT_NODE_END:
        return _prev._start;
      case ATTRIBUTE_NODE:
        return null;
      default:
        return _prev === this ? null : _prev;
    }
  }

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  contains(node) {
    let {parentNode} = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }

  hasChildNodes() {
    return !!this.lastChild;
  }

  // Element Mutations

  /**
   * @param {Node} node
   */
  appendChild(node) {
    // invalidate(this);
    return this.insertBefore(node, this._end);
  }

  /**
   * @param {Node} node
   * @param {Node?} node
   * @returns {Node}
   */
  insertBefore(node, before) {
    // invalidate(this);
    const _end = before || this._end;
    const {_prev} = _end;
    switch (node.nodeType) {
      case ELEMENT_NODE: {
        node.remove();
        _prev._next = node;
        _end._prev = node._end;
        node._prev = _prev;
        node._end._next = _end;
        node.parentNode = this;
        break;
      }
      case DOCUMENT_FRAGMENT_NODE: {
        // invalidate(node);
        let {firstChild, lastChild} = node;
        if (firstChild) {
          _prev._next = firstChild;
          firstChild._prev = _prev;
          const last = getEnd(lastChild);
          _end._prev = last;
          last._next = _end;
          // reset fragment
          node._next = node._end;
          node._end._prev = node;
          // set parent node
          do {
            firstChild.parentNode = this;
          } while (
            firstChild !== lastChild &&
            (firstChild = firstChild._next)
          );
        }
        break;
      }
      default: {
        node.remove();
        _prev._next = _end._prev = node;
        node._prev = _prev;
        node._next = _end;
        node.parentNode = this;
        break;
      }
    }
    return node;
  }

  normalize() {
    let shouldInvalidate = false;
    let {_next, _end} = this;
    while (_next !== _end) {
      const {_next: next, _prev, nodeType} = _next;
      if (nodeType === TEXT_NODE) {
        if (!_next.textContent) {
          shouldInvalidate = true;
          _next.remove();
        }
        else if (_prev && _prev.nodeType === TEXT_NODE) {
          shouldInvalidate = true;
          _prev.textContent += _next.textContent;
          _next.remove();
        }
      }
      _next = next;
    }
    // if (shouldInvalidate) invalidate(this);
  }

  /**
   * @param {Node} node
   * @returns {Node}
   */
  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error('node is not a child');
    node.remove();
    return node;
  }

  /**
   * @param {Node} node
   * @param {Node} replaced
   * @returns {Node}
   */
  replaceChild(node, replaced) {
    const {_prev, _next} = getBoundaries(replaced);
    // invalidate(this);
    replaced.remove();
    node.remove();
    _prev._next = node;
    node._prev = _prev;
    const _end = getEnd(node);
    _next._prev = _end;
    _end._next = _next;
    node.parentNode = this;
    return replaced;
  }

  /**
   * @param {string} selectors
   * @returns {Element?}
   */
  querySelector(selectors) {
    return ParentNode.querySelector(this, selectors);
  }

  /**
   * @param {string} selectors
   * @returns {NodeList}
   */
  querySelectorAll(selectors) {
    return ParentNode.querySelectorAll(this, selectors);
  }
}

export class NodeText extends Node {

  constructor(ownerDocument, localName, textContent, NODE) {
    super(ownerDocument, localName, NODE);
    this.textContent = String(textContent);
  }

  get nodeValue() { return this.textContent; }

  /**
   * @type {Node?}
   */
  get nextSibling() {
    return this._next;
  }

  /**
   * @type {Node?}
   */
  get previousSibling() {
    return this._prev;
  }

  /**
   * @type {Element?}
   */
  get nextElementSibling() {
    return NonDocumentTypeChildNode.nextElementSibling(this);
  }

  /**
   * @type {Element?}
   */
  get previousElementSibling() {
    return NonDocumentTypeChildNode.previousElementSibling(this);
  }
}

export class NodeElementEnd extends Node {
  constructor(element) {
    super(element.ownerDocument, element.localName, ELEMENT_NODE_END);
    this._prev = this._start = element;
  }
}
