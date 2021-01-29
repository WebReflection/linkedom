import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLMediaElement
 */
export class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
