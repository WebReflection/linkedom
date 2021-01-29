import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLSourceElement
 */
export class HTMLSourceElement extends HTMLElement {
  constructor(ownerDocument, localName = 'source') {
    super(ownerDocument, localName);
  }
}
