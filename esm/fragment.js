import {DOCUMENT_FRAGMENT_NODE} from './constants.js';
import {NonElementParentNode, ParentNode} from './mixins.js';
import {NodeElement, NodeElementEnd} from './node.js';

/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends NodeElement {

  constructor(ownerDocument) {
    super(ownerDocument, '#fragment', DOCUMENT_FRAGMENT_NODE);
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
