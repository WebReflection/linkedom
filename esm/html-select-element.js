import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLSelectElement
 */
export class HTMLSelectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'select') {
    super(ownerDocument, localName);
  }
}
