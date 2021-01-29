'use strict';
const {booleanAttribute} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLInputElement
 */
class HTMLInputElement extends HTMLElement {
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
exports.HTMLInputElement = HTMLInputElement
