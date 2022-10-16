import {HTMLElement} from './element.js';

export class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}
