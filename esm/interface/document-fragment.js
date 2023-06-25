import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {NonElementParentNode} from '../mixin/non-element-parent-node.js';

/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument, tagName = '#document-fragment') {
    super(ownerDocument, tagName, DOCUMENT_FRAGMENT_NODE);
  }
}
