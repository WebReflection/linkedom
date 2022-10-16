'use strict';
const {HTMLElement} = require('./element.js');

class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = 'pre') {
    super(ownerDocument, localName);
  }
}
exports.HTMLPreElement = HTMLPreElement
