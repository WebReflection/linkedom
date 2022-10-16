'use strict';
const {HTMLElement} = require('./element.js');

class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHeadElement = HTMLHeadElement
