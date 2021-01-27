'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('./constants.js');
const {NonElementParentNode, ParentNode} = require('./mixins.js');
const {NodeElement, NodeElementEnd} = require('./node.js');

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment extends NodeElement {

  constructor(ownerDocument) {
    super(ownerDocument, '#fragment', DOCUMENT_FRAGMENT_NODE);
    this._next = this._end = new NodeElementEnd(this);
  }

  // <NonElementParentNode>
  /**
   * @param {string} id
   * @returns {Element?}
   */
  getElementById(id) {
    const {_next, _end} = this;
    return _next === _end ? null : NonElementParentNode.getElementById(this, id);
  }
  // </NonElementParentNode>

  // <ParentNode>
  get children() {
    return ParentNode.children(this);
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

  toString() {
    return this.childNodes.join('');
  }
}
exports.DocumentFragment = DocumentFragment
