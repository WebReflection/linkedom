import {HTMLElement} from './element.js';

export class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}
