import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTitleElement
 */
export class HTMLTitleElement extends HTMLElement {
  constructor(ownerDocument, localName = 'title') {
    super(ownerDocument, localName);
  }
}
