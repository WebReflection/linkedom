'use strict';
const {HTMLElement} = require('./element.js');

class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}
exports.HTMLParagraphElement = HTMLParagraphElement
