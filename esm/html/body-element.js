import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLBodyElement
 */
export class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}
