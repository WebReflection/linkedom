import {HTMLElement} from './element.js';

export class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}
