import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTableElement
 */
export class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}
