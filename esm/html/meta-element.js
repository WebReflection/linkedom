import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLMetaElement
 */
export class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}
