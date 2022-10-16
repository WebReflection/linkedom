import {HTMLElement} from './element.js';

export class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}
