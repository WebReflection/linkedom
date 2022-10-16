import {HTMLElement} from './element.js';

export class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}
