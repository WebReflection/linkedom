import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLUListElement
 */
export class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}
