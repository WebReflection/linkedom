import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLHtmlElement
 */
export class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
