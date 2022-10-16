'use strict';
const {HTMLElement} = require('./element.js');

class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}
exports.HTMLParamElement = HTMLParamElement
