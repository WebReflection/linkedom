'use strict';
const {HTMLElement} = require('./element.js');

class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLabelElement = HTMLLabelElement
