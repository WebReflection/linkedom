'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }

  get textContent() {
    let r = ""
    let curr = this.firstChild
    while (curr) {
      r += curr.textContent
      curr = curr.nextSibling
    }
    return r;
  }
}
exports.DocumentFragment = DocumentFragment
