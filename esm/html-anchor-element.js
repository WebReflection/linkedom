import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLAnchorElement
 */
export class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = 'a') {
    super(ownerDocument, localName);
  }
}
