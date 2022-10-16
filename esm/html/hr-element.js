import {HTMLElement} from './element.js';

export class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}
