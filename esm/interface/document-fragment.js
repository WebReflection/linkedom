import {DOCUMENT_FRAGMENT_NODE, TEXT_NODE} from '../shared/constants.js';
import {NonElementParentNode} from '../mixin/non-element-parent-node.js';
import {NEXT, END} from '../shared/symbols.js'

/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment', DOCUMENT_FRAGMENT_NODE);
  }

  get textContent() {
    const text = [];
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      if (next.nodeType === TEXT_NODE)
        text.push(next.data);
      next = next[NEXT];
    }
    return text.join('');
  }
}
