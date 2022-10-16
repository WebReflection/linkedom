'use strict';
const {HTMLElement} = require('./element.js');

class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHtmlElement = HTMLHtmlElement
