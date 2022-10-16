'use strict';
const {HTMLElement} = require('./element.js');

class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}
exports.HTMLProgressElement = HTMLProgressElement
