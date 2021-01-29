import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLOutputElement
 */
export class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}
