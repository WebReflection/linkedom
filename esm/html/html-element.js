import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLHtmlElement
 */
export class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
