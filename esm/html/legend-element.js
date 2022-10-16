import {HTMLElement} from './element.js';

export class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}
