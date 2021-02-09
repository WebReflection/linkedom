import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLLabelElement
 */
export class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}
