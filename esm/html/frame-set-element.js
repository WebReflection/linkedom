import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLFrameSetElement
 */
export class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}
