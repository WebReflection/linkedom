import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLScriptElement
 */
export class HTMLScriptElement extends HTMLElement {
  constructor(ownerDocument, localName = 'script') {
    super(ownerDocument, localName);
  }
}
