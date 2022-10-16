'use strict';
const {HTMLElement} = require('./element.js');

class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOListElement = HTMLOListElement
