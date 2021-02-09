import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLVideoElement
 */
export class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}
