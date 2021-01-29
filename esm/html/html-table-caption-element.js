import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
export class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}
