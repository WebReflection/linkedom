import {HTMLElement} from './element.js';

export class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}
