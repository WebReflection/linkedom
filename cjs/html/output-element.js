'use strict';
const {HTMLElement} = require('./element.js');

class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOutputElement = HTMLOutputElement
