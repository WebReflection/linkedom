import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLDataListElement
 */
export class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'datalist') {
    super(ownerDocument, localName);
  }
}
