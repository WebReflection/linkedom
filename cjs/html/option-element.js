'use strict';
const {HTMLElement} = require('./element.js');

class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'option') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOptionElement = HTMLOptionElement
