import {HTMLElement} from './element.js';

export class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}
