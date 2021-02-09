import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLSpanElement
 */
export class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}
