import {HTMLElement} from './element.js';

export class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}
