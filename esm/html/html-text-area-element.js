import {booleanAttribute} from '../utils.js';
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
export class HTMLTextAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'textarea') {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}
