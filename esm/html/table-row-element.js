import {HTMLElement} from './element.js';

export class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}
