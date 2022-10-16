import {HTMLElement} from './element.js';

export class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }
}
