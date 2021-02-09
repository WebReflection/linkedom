import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLBRElement
 */
export class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}
