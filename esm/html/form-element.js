import {HTMLElement} from './element.js';

export class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = 'form') {
    super(ownerDocument, localName);
  }
}
