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
  getEnd
} from './utils.js';

export class Node extends EventTarget {

  static get ELEMENT_NODE() { return ELEMENT_NODE; }
  static get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  static get TEXT_NODE() { return TEXT_NODE; }
  static get COMMENT_NODE() { return COMMENT_NODE; }
  static get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  static get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }

  constructor(ownerDocument, localName, nodeType) {
    super();
    this.ownerDocument = ownerDocument;
    this.localName = localName;
    this.nodeType = nodeType;
    this.parentNode = null;

    this._prev = null;
    this._next = null;
  }

  get [DOM]() { return true; }

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
  cloneNode(deep = false) {
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
      case ATTRIBUTE_NODE:
        const attribute = ownerDocument.createAttribute(this.name);
        attribute.value = this.value;
        return attribute;
      case TEXT_NODE:
        return ownerDocument.createTextNode(this.textContent);
      case COMMENT_NODE:
        return ownerDocument.createComment(this.textContent);
      case DOCUMENT_FRAGMENT_NODE:
        const fragment = ownerDocument.createDocumentFragment();
        fragment.append(...this.childNodes.map(child => child.cloneNode(deep)));
        return fragment;
      default:
        throw new Error('unable to clone this node');
    }
  }

  isEqualNode(node) {
    const {nodeType} = this;
    if (nodeType === node.nodeType) {
      switch (nodeType) {
        case ELEMENT_NODE:
          return this.outerHTML === node.outerHTML;
        case ATTRIBUTE_NODE:
          return this.toString() === node.toString();
        default:
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node, i) => node.isEqualNode(bNodes[i]));
      }
    }
    return false;
  }

  // meh
  isSameNode(node) {
    return this === node;
  }

  remove() {
    ChildNode.remove(this);
  }
}

export class NodeElement extends Node {

  get firstChild() {
    const {_next, _end} = findNext(this);
    return _next === _end ? null : _next;
  }

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

  get childNodes() {
    const childNodes = new NodeList;
    let {_next, _end} = findNext(this);
    while (_next !== _end) {
      childNodes.push(_next);
      _next = getEnd(_next)._next;
    }
    return childNodes;
  }

  getRootNode() {
    return this.ownerDocument.root;
  }

  contains(node) {
    let {parentNode} = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }

  hasChildNodes() {
    return !!this.lastChild;
  }

  appendChild(node) {
    return this.insertBefore(node, this._end);
  }

  insertBefore(node, before) {
    const _end = before || this._end;
    const {_prev} = _end;
    switch (node.nodeType) {
      case ELEMENT_NODE: {
        node.remove();
        _prev._next = node;
        _end._prev = node._end;
        node._prev = _prev;
        node._end._next = _end;
        break;
      }
      case DOCUMENT_FRAGMENT_NODE: {
        const {firstChild, lastChild} = node;
        if (firstChild) {
          _prev._next = firstChild;
          firstChild._prev = _prev;
          const last = getEnd(lastChild);
          _end._prev = last;
          last._next = _end;
          // reset fragment
          node._next = node._end;
          node._end._prev = node;
        }
        break;
      }
      default: {
        node.remove();
        _prev._next = _end._prev = node;
        node._prev = _prev;
        node._next = _end;
        break;
      }
    }
    node.parentNode = this;
    return node;
  }

  normalize() {
    let {_next, _end} = this;
    while (_next !== _end) {
      const {_next: next, _prev, nodeType} = _next;
      if (nodeType === TEXT_NODE) {
        if (!_next.textContent)
          _next.remove();
        else if (_prev && _prev.nodeType === TEXT_NODE) {
          _prev.textContent += _next.textContent;
          _next.remove();
        }
      }
      _next = next;
    }
  }

  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error('node is not a child');
    node.remove();
    return node;
  }

  replaceChild(node, replaced) {
    const {_prev, _next} = getBoundaries(replaced);
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

  querySelector(selectors) {
    return ParentNode.querySelector(this, selectors);
  }

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

  get firstChild() { return null; }
  get lastChild() { return null; }
  get childNodes() { return []; }

  get nextSibling() {
    return this._next;
  }

  get previousSibling() {
    return this._prev;
  }

  get nextElementSibling() {
    return NonDocumentTypeChildNode.nextElementSibling(this);
  }

  get previousElementSibling() {
    return NonDocumentTypeChildNode.previousElementSibling(this);
  }

  normalize() {}
  hasChildNodes() { return false; }

  insertBefore() { throw new Error('invalid operation'); }
  appendChild() { throw new Error('invalid operation'); }
  replaceChild() { throw new Error('invalid operation'); }
  removeChild() { throw new Error('invalid operation'); }
}

export class NodeElementEnd extends Node {
  constructor(element) {
    super(element.ownerDocument, element.localName, ELEMENT_NODE_END);
    this._prev = this._start = element;
  }
}
