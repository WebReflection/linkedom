'use strict';
const {DOCUMENT_FRAGMENT_NODE, TEXT_NODE} = require('../shared/constants.js');
const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');
const {NEXT, END} = require('../shared/symbols.js')

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }

  get textContent() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE)
        text.push(next.textContent);
      next = next[NEXT];
    }
    return text.join('');
  }
}
exports.DocumentFragment = DocumentFragment
