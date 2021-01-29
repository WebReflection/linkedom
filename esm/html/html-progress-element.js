import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLProgressElement
 */
export class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}
