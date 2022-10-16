import {HTMLElement} from './element.js';

export class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}
