'use strict';
const {HTMLElement} = require('./element.js');

class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableRowElement = HTMLTableRowElement
