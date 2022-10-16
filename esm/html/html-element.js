import {HTMLElement} from './element.js';

export class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
