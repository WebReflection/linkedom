import {HTMLElement} from './element.js';

export class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}
