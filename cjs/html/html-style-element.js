'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends HTMLElement {
  constructor(ownerDocument, localName = 'style') {
    super(ownerDocument, localName);
  }
}
exports.HTMLStyleElement = HTMLStyleElement
