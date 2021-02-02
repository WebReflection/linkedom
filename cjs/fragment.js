'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('./constants.js');
const {NonElementParentNode} = require('./mixins.js');
const {NodeElement, NodeElementEnd} = require('./node.js');

class Fragment extends NodeElement {

  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, DOCUMENT_FRAGMENT_NODE);
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

  toString() {
    return this.childNodes.join('');
  }
}
exports.Fragment = Fragment
