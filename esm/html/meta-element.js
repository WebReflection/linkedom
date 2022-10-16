import {HTMLElement} from './element.js';

export class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}
