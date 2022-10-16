import {HTMLElement} from './element.js';

export class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
