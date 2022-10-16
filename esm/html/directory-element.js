import {HTMLElement} from './element.js';

export class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}
