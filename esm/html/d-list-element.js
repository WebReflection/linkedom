import {HTMLElement} from './element.js';

export class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
