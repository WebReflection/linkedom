'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLQuoteElement
 */
class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}
exports.HTMLQuoteElement = HTMLQuoteElement
