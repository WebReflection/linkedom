'use strict';
const {HTMLElement} = require('./element.js');

class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFieldSetElement = HTMLFieldSetElement
