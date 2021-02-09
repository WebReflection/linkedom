import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLMediaElement
 */
export class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
