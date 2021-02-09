import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLObjectElement
 */
export class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
