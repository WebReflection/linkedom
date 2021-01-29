import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLImageElement
 */
export class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = 'img') {
    super(ownerDocument, localName);
  }
}
