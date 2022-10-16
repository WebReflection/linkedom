import {HTMLElement} from './element.js';

export class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}
