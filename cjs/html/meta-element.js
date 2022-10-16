'use strict';
const {HTMLElement} = require('./element.js');

class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMetaElement = HTMLMetaElement
