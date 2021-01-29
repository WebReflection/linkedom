import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
export class HTMLTextAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'textarea') {
    super(ownerDocument, localName);
  }
}
