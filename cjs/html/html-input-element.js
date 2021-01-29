'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLInputElement
 */
class HTMLInputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'input') {
    super(ownerDocument, localName);
  }
}
exports.HTMLInputElement = HTMLInputElement
