import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {NonElementParentNode} from '../mixin/non-element-parent-node.js';

export class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }
}
