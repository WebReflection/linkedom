import {booleanAttribute} from '../utils.js';
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLInputElement
 */
export class HTMLInputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'input') {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}
