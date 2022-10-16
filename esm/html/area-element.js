import {HTMLElement} from './element.js';

export class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}
