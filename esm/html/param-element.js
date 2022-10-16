import {HTMLElement} from './element.js';

export class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}
