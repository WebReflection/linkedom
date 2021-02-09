import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
export class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}
