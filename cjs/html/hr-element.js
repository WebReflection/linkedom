'use strict';
const {HTMLElement} = require('./element.js');

class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHRElement = HTMLHRElement
