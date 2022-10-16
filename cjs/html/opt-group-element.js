'use strict';
const {HTMLElement} = require('./element.js');

class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOptGroupElement = HTMLOptGroupElement
