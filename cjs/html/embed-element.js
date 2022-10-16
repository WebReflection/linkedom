'use strict';
const {HTMLElement} = require('./element.js');

class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}
exports.HTMLEmbedElement = HTMLEmbedElement
