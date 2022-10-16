import {HTMLElement} from './element.js';

export class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}
