import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLLinkElement
 */
export class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = 'link') {
    super(ownerDocument, localName);
  }
}
