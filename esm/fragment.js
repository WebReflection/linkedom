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
    return this.children.find(
      _next => NonElementParentNode.getElementById({_next}, id)
    );
  }
  // </NonElementParentNode>

  // <ParentNode>
  get children() {
    return ParentNode.children(this);
  }

  /**
   * @returns {Element?}
   */
  get firstElementChild() {
    return ParentNode.firstElementChild(this);
  }

  /**
   * @returns {Element?}
   */
  get lastElementChild() {
    return ParentNode.lastElementChild(this);
  }

  /**
   * @returns {number}
   */
  get childElementCount() {
    return ParentNode.childElementCount(this);
  }

  /**
   * @param  {...Nodes} nodes 
   */
  prepend(...nodes) {
    return ParentNode.prepend(this, ...nodes);
  }

  /**
   * @param  {...Nodes} nodes 
   */
  append(...nodes) {
    return ParentNode.append(this, ...nodes);
  }

  /**
   * @param  {...Nodes} nodes 
   */
  replaceChildren(...nodes) {
    return ParentNode.replaceChildren(this, ...nodes);
  }
  // </ParentNode>
}
