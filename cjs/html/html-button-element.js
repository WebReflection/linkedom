'use strict';
const {booleanAttribute, registerHTMLClass} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

const tagName = 'button';

/**
 * @implements globalThis.HTMLButtonElement
 */
class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLButtonElement);

exports.HTMLButtonElement = HTMLButtonElement;
