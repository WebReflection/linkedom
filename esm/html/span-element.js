import {HTMLElement} from './element.js';

export class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}
