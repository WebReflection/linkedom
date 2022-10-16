'use strict';
const {HTMLElement} = require('./element.js');

class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}
exports.HTMLAreaElement = HTMLAreaElement
