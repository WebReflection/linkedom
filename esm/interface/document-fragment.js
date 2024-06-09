import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {NonElementParentNode} from '../mixin/non-element-parent-node.js';

/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends NonElementParentNode {
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
