import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLBaseElement
 */
export class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}
