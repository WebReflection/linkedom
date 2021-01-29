import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLInputElement
 */
export class HTMLInputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'input') {
    super(ownerDocument, localName);
  }
}
