import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLTableElement
 */
export class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}
