'use strict';
const {HTMLElement} = require('./element.js');

class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDListElement = HTMLDListElement
