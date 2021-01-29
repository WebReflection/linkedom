import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLLIElement
 */
export class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}
