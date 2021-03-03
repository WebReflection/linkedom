'use strict';
// https://dom.spec.whatwg.org/#interface-parentnode
// Document, DocumentFragment, Element

const {
  ATTRIBUTE_NODE,
  DOCUMENT_FRAGMENT_NODE,
  ELEMENT_NODE,
  TEXT_NODE,
  NODE_END,
  COMMENT_NODE
} = require('../shared/constants.js');

const {PRIVATE, END, NEXT, PREV, START, VALUE} = require('../shared/symbols.js');

const {prepareMatch} = require('../shared/matches.js');
const {previousSibling, nextSibling} = require('../shared/node.js');
const {getEnd, knownAdjacent, knownBoundaries, knownSegment, knownSiblings, localCase} = require('../shared/utils.js');

const {Node} = require('../interface/node.js');
const {Text} = require('../interface/text.js');
const {NodeList} = require('../interface/node-list.js');

const {moCallback} = require('../interface/mutation-observer.js');
const {connectedCallback} = require('../interface/custom-element-registry.js');

const {nextElementSibling} = require('./non-document-type-child-node.js');

const isNode = node => node instanceof Node;

const insert = (parentNode, child, nodes) => {
  const {ownerDocument} = parentNode;
  for (const node of nodes)
    parentNode.insertBefore(
      isNode(node) ? node : new Text(ownerDocument, node),
      child
    );
};

/** @typedef {{
    [typeof NEXT]: NodeStruct,
    [typeof PREV]: NodeStruct,
    [typeof START]: NodeStruct,
    nodeType: typeof ATTRIBUTE_NODE | typeof DOCUMENT_FRAGMENT_NODE | typeof ELEMENT_NODE | typeof TEXT_NODE | typeof NODE_END | typeof COMMENT_NODE,
    ownerDocument: Document,
    parentNode: ParentNode,
}} NodeStruct */

class ParentNode extends Node {
  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    this[PRIVATE] = null;
    /** @type {NodeStruct} */
    this[NEXT] = this[END] = {
      [NEXT]: null,
      [PREV]: this,
      [START]: this,
      nodeType: NODE_END,
      ownerDocument: this.ownerDocument,
      parentNode: null
    };
  }

  get childNodes() {
    const childNodes = new NodeList;
    let {firstChild} = this;
    while (firstChild) {
      childNodes.push(firstChild);
      firstChild = nextSibling(firstChild);
    }
    return childNodes;
  }

  get children() {
    const children = new NodeList;
    let {firstElementChild} = this;
    while (firstElementChild) {
      children.push(firstElementChild);
      firstElementChild = nextElementSibling(firstElementChild);
    }
    return children;
  }

  get firstChild() {
    let {[NEXT]: next, [END]: end} = this;
    while (next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    return next === end ? null : next;
  }

  get firstElementChild() {
    let {firstChild} = this;
    while (firstChild) {
      if (firstChild.nodeType === ELEMENT_NODE)
        return firstChild;
      firstChild = nextSibling(firstChild);
    }
    return null;
  }

  get lastChild() {
    const prev = this[END][PREV];
    switch (prev.nodeType) {
      case NODE_END:
        return prev[START];
      case ATTRIBUTE_NODE:
        return null;
    }
    return prev === this ? null : prev;
  }

  get lastElementChild() {
    let {lastChild} = this;
    while (lastChild) {
      if (lastChild.nodeType === ELEMENT_NODE)
        return lastChild;
      lastChild = previousSibling(lastChild);
    }
    return null;
  }

  get childElementCount() {
    return this.children.length;
  }

  prepend(...nodes) {
    insert(this, this.firstChild, nodes);
  }

  append(...nodes) {
    insert(this, this[END], nodes);
  }

  replaceChildren(...nodes) {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end && next.nodeType === ATTRIBUTE_NODE)
      next = next[NEXT];
    while (next !== end) {
      const after = getEnd(next)[NEXT];
      next.remove();
      next = after;
    }
    if (nodes.length)
      insert(this, end, nodes);
  }

  getElementsByClassName(className) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (
        next.nodeType === ELEMENT_NODE &&
        next.hasAttribute('class') &&
        next.classList.has(className)
      )
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  getElementsByTagName(tagName) {
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && (
        next.localName === tagName ||
        localCase(next) === tagName
      ))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  querySelector(selectors) {
    const matches = prepareMatch(this, selectors);
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        return next;
      next = next[NEXT];
    }
    return null;
  }

  querySelectorAll(selectors) {
    const matches = prepareMatch(this, selectors);
    const elements = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE && matches(next))
        elements.push(next);
      next = next[NEXT];
    }
    return elements;
  }

  appendChild(node) {
    return this.insertBefore(node, this[END]);
  }

  contains(node) {
    let parentNode = node;
    while (parentNode && parentNode !== this)
      parentNode = parentNode.parentNode;
    return parentNode === this;
  }

  insertBefore(node, before = null) {
    if (node === this)
      throw new Error('unable to append a node to itself');
    const next = before || this[END];
    switch (node.nodeType) {
      case ELEMENT_NODE:
        node.remove();
        node.parentNode = this;
        knownBoundaries(next[PREV], node, next);
        moCallback(node, null);
        connectedCallback(node);
        break;
      case DOCUMENT_FRAGMENT_NODE: {
        let {[PRIVATE]: parentNode, firstChild, lastChild} = node;
        if (firstChild) {
          knownSegment(next[PREV], firstChild, lastChild, next);
          knownAdjacent(node, node[END]);
          if (parentNode)
            parentNode.replaceChildren();
          do {
            firstChild.parentNode = this;
            moCallback(firstChild, null);
            if (firstChild.nodeType === ELEMENT_NODE)
              connectedCallback(firstChild);
          } while (
            firstChild !== lastChild &&
            (firstChild = nextSibling(firstChild))
          );
        }
        break;
      }
      case TEXT_NODE:
      case COMMENT_NODE:
        node.remove();
      /* eslint no-fallthrough:0 */
      // this covers DOCUMENT_TYPE_NODE too
      default:
        node.parentNode = this;
        knownSiblings(next[PREV], node, next);
        moCallback(node, null);
        break;
    }
    return node;
  }

  normalize() {
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      const {[NEXT]: $next, [PREV]: $prev, nodeType} = next;
      if (nodeType === TEXT_NODE) {
        if (!next[VALUE])
          next.remove();
        else if ($prev && $prev.nodeType === TEXT_NODE) {
          $prev.textContent += next.textContent;
          next.remove();
        }
      }
      next = $next;
    }
  }

  removeChild(node) {
    if (node.parentNode !== this)
      throw new Error('node is not a child');
    node.remove();
    return node;
  }

  replaceChild(node, replaced) {
    const next = getEnd(replaced)[NEXT];
    replaced.remove();
    this.insertBefore(node, next);
    return replaced;
  }
}
exports.ParentNode = ParentNode
