import {HTMLElement} from './element.js';

export class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}
