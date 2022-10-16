import {HTMLElement} from './element.js';

export class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}
