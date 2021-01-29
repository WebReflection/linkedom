import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLHeadingElement
 */
export class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = 'h1') {
    super(ownerDocument, localName);
  }
}
