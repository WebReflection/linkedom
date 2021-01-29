import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLOptionElement
 */
export class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'option') {
    super(ownerDocument, localName);
  }
}
