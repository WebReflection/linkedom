import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLBodyElement
 */
export class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}
