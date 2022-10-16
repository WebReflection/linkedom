import {HTMLElement} from './element.js';

export class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = 'pre') {
    super(ownerDocument, localName);
  }
}
