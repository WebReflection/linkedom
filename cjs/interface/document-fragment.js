'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');

/**
 * @implements globalThis.DocumentFragment
 */
class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument, tagName = '#document-fragment') {
    super(ownerDocument, tagName, DOCUMENT_FRAGMENT_NODE);
  }
}
exports.DocumentFragment = DocumentFragment
