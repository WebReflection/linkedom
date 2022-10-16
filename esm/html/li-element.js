import {HTMLElement} from './element.js';

export class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}
