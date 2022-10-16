'use strict';
const {HTMLElement} = require('./element.js');

class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDirectoryElement = HTMLDirectoryElement
