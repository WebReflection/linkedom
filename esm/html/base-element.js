import {HTMLElement} from './element.js';

export class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}
