import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLModElement
 */
export class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}
