import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLFontElement
 */
export class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}
