import {HTMLElement} from './element.js';

export class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}
