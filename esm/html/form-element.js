import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLFormElement
 */
export class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = 'form') {
    super(ownerDocument, localName);
  }
}
