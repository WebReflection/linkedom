import {HTMLElement} from './element.js';

export class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}
