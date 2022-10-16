import {registerHTMLClass} from '../shared/register-html-class.js';
import {booleanAttribute} from '../shared/attributes.js';

import {TextElement} from './text-element.js';

const tagName = 'textarea';

class HTMLTextAreaElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get placeholder() { return this.getAttribute('placeholder'); }
  set placeholder(value) { this.setAttribute('placeholder', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }

  get value() { return this.textContent; }
  set value(content) {
    // this works around a ts bug with automatically inferring textContent when it's a getter/setter in the base class
    // https://github.com/microsoft/TypeScript/issues/51191
    /** @type {string} */
    this.textContent = content;
 }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLTextAreaElement);

export {HTMLTextAreaElement};
