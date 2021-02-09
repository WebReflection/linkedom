'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLLabelElement
 */
class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLabelElement = HTMLLabelElement
