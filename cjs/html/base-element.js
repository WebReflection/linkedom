'use strict';
const {HTMLElement} = require('./element.js');

class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}
exports.HTMLBaseElement = HTMLBaseElement
