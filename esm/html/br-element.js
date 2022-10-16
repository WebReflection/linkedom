import {HTMLElement} from './element.js';

export class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}
