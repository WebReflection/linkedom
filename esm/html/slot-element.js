import {HTMLElement} from './element.js';

export class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = 'slot') {
    super(ownerDocument, localName);
  }
}
