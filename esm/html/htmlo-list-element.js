import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLOListElement
 */
export class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}
