import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLOptGroupElement
 */
export class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}
