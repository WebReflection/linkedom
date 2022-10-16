import {HTMLElement} from './element.js';

export class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
