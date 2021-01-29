'use strict';
const {booleanAttribute} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLButtonElement
 */
class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = 'button') {
    super(ownerDocument, localName);
  }

  get disabled() {
    return booleanAttribute.get(this, 'disabled');
  }

  set disabled(value) {
    booleanAttribute.set(this, 'disabled', value);
  }
}
exports.HTMLButtonElement = HTMLButtonElement
