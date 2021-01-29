import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTableCellElement
 */
export class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = 'td') {
    super(ownerDocument, localName);
  }
}
