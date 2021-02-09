import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLTableRowElement
 */
export class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}
