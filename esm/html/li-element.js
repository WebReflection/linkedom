import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLLIElement
 */
export class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}
