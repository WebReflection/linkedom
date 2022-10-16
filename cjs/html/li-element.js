'use strict';
const {HTMLElement} = require('./element.js');

class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLIElement = HTMLLIElement
