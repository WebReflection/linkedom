import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLDetailsElement
 */
export class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}
