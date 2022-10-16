'use strict';
const {HTMLElement} = require('./element.js');

class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableElement = HTMLTableElement
