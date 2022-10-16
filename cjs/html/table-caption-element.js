'use strict';
const {HTMLElement} = require('./element.js');

class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableCaptionElement = HTMLTableCaptionElement
