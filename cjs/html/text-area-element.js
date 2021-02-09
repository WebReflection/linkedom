'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');
const {booleanAttribute} = require('../shared/attributes.js');

const {TextElement} = require('./text-element.js');

const tagName = 'textarea';

/**
 * @implements globalThis.HTMLTextAreaElement
 */
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
  set value(content) { this.textContent = content; }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLTextAreaElement);

exports.HTMLTextAreaElement = HTMLTextAreaElement;
