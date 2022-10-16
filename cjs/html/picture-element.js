'use strict';
const {HTMLElement} = require('./element.js');

class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = 'picture') {
    super(ownerDocument, localName);
  }
}
exports.HTMLPictureElement = HTMLPictureElement
