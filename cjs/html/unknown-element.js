'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLUnknownElement
 */
class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}
exports.HTMLUnknownElement = HTMLUnknownElement
