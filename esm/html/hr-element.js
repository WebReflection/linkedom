import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLHRElement
 */
export class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}
