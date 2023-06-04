import {HTMLElement} from './element.js';
import {registerHTMLClass} from '../shared/register-html-class.js';

const tagName = 'slot';

/**
 * @implements globalThis.HTMLSlotElement
 */
class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  assign() {}

  assignedNodes() {
    return [];
  }

  assignedElements() {
    return [];
  }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLSlotElement);

export {HTMLSlotElement};
