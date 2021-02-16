'use strict';
// https://dom.spec.whatwg.org/#node

const {
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  DOCUMENT_NODE,
  DOCUMENT_FRAGMENT_NODE,
  DOCUMENT_TYPE_NODE,
  DOCUMENT_POSITION_DISCONNECTED,
  DOCUMENT_POSITION_PRECEDING,
  DOCUMENT_POSITION_FOLLOWING,
  DOCUMENT_POSITION_CONTAINS,
  DOCUMENT_POSITION_CONTAINED_BY,
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
} = require('../shared/constants.js');

const {NEXT, PREV} = require('../shared/symbols.js');

const {EventTarget} = require('./event-target.js');

const {NodeList} = require('./node-list.js');

const getParentNodeCount = ({parentNode}) => {
  let count = 0;
  while (parentNode) {
    count++;
    parentNode = parentNode.parentNode;
  }
  return count;
};

/**
 * @implements globalThis.Node
 */
class Node extends EventTarget {

  static get ELEMENT_NODE() { return ELEMENT_NODE; }
  static get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  static get TEXT_NODE() { return TEXT_NODE; }
  static get COMMENT_NODE() { return COMMENT_NODE; }
  static get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  static get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  static get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  constructor(ownerDocument, localName, nodeType) {
    super();
    this.ownerDocument = ownerDocument;
    this.localName = localName;
    this.nodeType = nodeType;
    this.parentNode = null;
    this[NEXT] = null;
    this[PREV] = null;
  }

  get ELEMENT_NODE() { return ELEMENT_NODE; }
  get ATTRIBUTE_NODE() { return ATTRIBUTE_NODE; }
  get TEXT_NODE() { return TEXT_NODE; }
  get COMMENT_NODE() { return COMMENT_NODE; }
  get DOCUMENT_NODE() { return DOCUMENT_NODE; }
  get DOCUMENT_FRAGMENT_NODE() { return DOCUMENT_FRAGMENT_NODE; }
  get DOCUMENT_TYPE_NODE() { return DOCUMENT_TYPE_NODE; }

  /* c8 ignore start */
  // mixin: node
  get isConnected() { return false; }
  get nodeName() { return this.localName; }
  get parentElement() { return null; }
  get previousSibling() { return null; }
  get previousElementSibling() { return null; }
  get nextSibling() { return null; }
  get nextElementSibling() { return null; }
  get childNodes() { return new NodeList; }
  get firstChild() { return null; }
  get lastChild() { return null; }

  // default values
  get nodeValue() { return null; }
  set nodeValue(value) {}
  get textContent() { return null; }
  set textContent(value) {}
  normalize() {}
  cloneNode() { return null; }
  contains() { return false; }
  insertBefore() {}
  appendChild() {}
  replaceChild() {}
  removeChild() {}
  toString() { return ''; }
  /* c8 ignore stop */

  hasChildNodes() { return !!this.lastChild; }
  isSameNode(node) { return this === node; }

  // TODO: attributes?
  compareDocumentPosition(target) {
    let result = 0;
    if (this !== target) {
      let self = getParentNodeCount(this);
      let other = getParentNodeCount(target);
      if (self < other) {
        result += DOCUMENT_POSITION_FOLLOWING;
        if (this.contains(target))
          result += DOCUMENT_POSITION_CONTAINED_BY;
      }
      else if (other < self) {
        result += DOCUMENT_POSITION_PRECEDING;
        if (target.contains(this))
          result += DOCUMENT_POSITION_CONTAINS;
      }
      else if (self && other) {
        const {childNodes} = this.parentNode;
        if (childNodes.indexOf(this) < childNodes.indexOf(target))
          result += DOCUMENT_POSITION_FOLLOWING;
        else
          result += DOCUMENT_POSITION_PRECEDING;
      }
      if (!self || !other) {
        result += DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
        result += DOCUMENT_POSITION_DISCONNECTED;
      }
    }
    return result;
  }

  isEqualNode(node) {
    if (this === node)
      return true;
    if (this.nodeType === node.nodeType) {
      switch (this.nodeType) {
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          const aNodes = this.childNodes;
          const bNodes = node.childNodes;
          return aNodes.length === bNodes.length && aNodes.every((node, i) => node.isEqualNode(bNodes[i]));
        }
      }
      return this.toString() === node.toString();
    }
    return false;
  }

  getRootNode() {
    let root = this;
    while (root.parentNode)
      root = root.parentNode;
    return root.nodeType === DOCUMENT_NODE ? root.documentElement : root;
  }
}
exports.Node = Node
