'use strict';
const {HTMLElement} = require('./element.js');

class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
exports.HTMLObjectElement = HTMLObjectElement
