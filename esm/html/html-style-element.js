import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLStyleElement
 */
export class HTMLStyleElement extends HTMLElement {
  constructor(ownerDocument, localName = 'style') {
    super(ownerDocument, localName);
  }
}
