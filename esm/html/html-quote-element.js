import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLQuoteElement
 */
export class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}
