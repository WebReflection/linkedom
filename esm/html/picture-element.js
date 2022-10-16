import {HTMLElement} from './element.js';

export class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = 'picture') {
    super(ownerDocument, localName);
  }
}
