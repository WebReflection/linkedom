import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLObjectElement
 */
export class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
