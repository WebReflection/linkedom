'use strict';
const {booleanAttribute} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTextAreaElement
 */
class HTMLTextAreaElement extends HTMLElement {
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
exports.HTMLTextAreaElement = HTMLTextAreaElement
