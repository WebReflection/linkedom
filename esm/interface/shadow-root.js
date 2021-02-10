import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {NonElementParentNode} from '../mixin/non-element-parent-node.js';

/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
  }
}
