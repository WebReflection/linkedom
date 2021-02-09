import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLDirectoryElement
 */
export class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}
