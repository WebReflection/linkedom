import {HTMLElement} from './element.js';

export class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}
