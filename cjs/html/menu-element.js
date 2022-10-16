'use strict';
const {HTMLElement} = require('./element.js');

class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMenuElement = HTMLMenuElement
