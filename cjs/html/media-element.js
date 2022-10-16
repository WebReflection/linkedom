'use strict';
const {HTMLElement} = require('./element.js');

class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMediaElement = HTMLMediaElement
