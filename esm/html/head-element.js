import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLHeadElement
 */
export class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}
