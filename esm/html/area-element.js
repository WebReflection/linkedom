import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLAreaElement
 */
export class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}
