import {booleanAttribute, registerHTMLClass} from '../utils.js';
import {TextElement} from '../text-element.js';

const tagName = 'textarea';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
export class HTMLTextAreaElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}

registerHTMLClass(tagName, HTMLTextAreaElement);

export {HTMLTextAreaElement};
