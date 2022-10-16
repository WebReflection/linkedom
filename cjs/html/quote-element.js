'use strict';
const {HTMLElement} = require('./element.js');

class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}
exports.HTMLQuoteElement = HTMLQuoteElement
