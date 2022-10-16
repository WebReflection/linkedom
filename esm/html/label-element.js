import {HTMLElement} from './element.js';

export class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}
