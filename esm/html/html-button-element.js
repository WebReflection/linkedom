import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLButtonElement
 */
export class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = 'button') {
    super(ownerDocument, localName);
  }
}
