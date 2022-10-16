'use strict';
const {HTMLElement} = require('./element.js');

class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDivElement = HTMLDivElement
