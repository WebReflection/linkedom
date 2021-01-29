'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLButtonElement
 */
class HTMLButtonElement extends HTMLElement {
  constructor(ownerDocument, localName = 'button') {
    super(ownerDocument, localName);
  }
}
exports.HTMLButtonElement = HTMLButtonElement
