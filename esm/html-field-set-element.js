import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLFieldSetElement
 */
export class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}
