import {HTMLElement} from './element.js';

export class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}
