'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLOutputElement
 */
class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOutputElement = HTMLOutputElement
