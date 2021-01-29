import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLUnknownElement
 */
export class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}
