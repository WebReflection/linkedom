import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLPictureElement
 */
export class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = 'picture') {
    super(ownerDocument, localName);
  }
}
