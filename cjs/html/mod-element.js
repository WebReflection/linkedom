'use strict';
const {HTMLElement} = require('./element.js');

class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}
exports.HTMLModElement = HTMLModElement
