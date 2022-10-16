import {HTMLElement} from './element.js';

export class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}
