import {booleanAttribute} from '../utils.js';
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLButtonElement
 */
export class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = 'button') {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}
