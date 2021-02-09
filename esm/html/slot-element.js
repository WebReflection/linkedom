import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLSlotElement
 */
export class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = 'slot') {
    super(ownerDocument, localName);
  }
}
