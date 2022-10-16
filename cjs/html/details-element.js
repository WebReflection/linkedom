'use strict';
const {HTMLElement} = require('./element.js');

class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDetailsElement = HTMLDetailsElement
