import {HTMLElement} from './element.js';

export class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = 'td') {
    super(ownerDocument, localName);
  }
}
