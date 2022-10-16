import {HTMLElement} from './element.js';

export class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}
