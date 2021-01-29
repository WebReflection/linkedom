import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLDListElement
 */
export class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
