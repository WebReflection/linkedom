import {HTMLElement} from './element.js';

export class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}
