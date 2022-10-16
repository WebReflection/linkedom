'use strict';
const {HTMLElement} = require('./element.js');

class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDataElement = HTMLDataElement
