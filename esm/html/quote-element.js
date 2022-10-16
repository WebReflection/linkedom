import {HTMLElement} from './element.js';

export class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}
