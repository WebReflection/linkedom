'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLBodyElement
 */
class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}
exports.HTMLBodyElement = HTMLBodyElement
