'use strict';
const {HTMLElement} = require('./element.js');

class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}
exports.HTMLUnknownElement = HTMLUnknownElement
