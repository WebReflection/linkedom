import {HTMLElement} from './element.js';

export class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
