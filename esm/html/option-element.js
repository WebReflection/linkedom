import {HTMLElement} from './element.js';

export class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'option') {
    super(ownerDocument, localName);
  }
}
