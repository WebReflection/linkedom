'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('./constants.js');
const {NonElementParentNode, ParentNode} = require('./mixins.js');
const {NodeElement, NodeElementEnd} = require('./node.js');

class Fragment extends NodeElement {

  constructor(ownerDocument) {
    super(ownerDocument, '#fragment', DOCUMENT_FRAGMENT_NODE);
    this._next = this._end = new NodeElementEnd(this);
  }

  // <NonElementParentNode>
  getElementById(id) {
    return this.children.find(
      _next => NonElementParentNode.getElementById({_next}, id)
    );
  }
  // </NonElementParentNode>

  // <ParentNode>
  get children() {
    return ParentNode.children(this);
  }

  get firstElementChild() {
    return ParentNode.firstElementChild(this);
  }

  get lastElementChild() {
    return ParentNode.lastElementChild(this);
  }

  get childElementCount() {
    return ParentNode.childElementCount(this);
  }

  prepend(...nodes) {
    return ParentNode.prepend(this, ...nodes);
  }

  append(...nodes) {
    return ParentNode.append(this, ...nodes);
  }

  replaceChildren(...nodes) {
    return ParentNode.replaceChildren(this, ...nodes);
  }
  // </ParentNode>
}
exports.Fragment = Fragment