import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLDataElement
 */
export class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
