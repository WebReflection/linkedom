import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLDataElement
 */
export class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
