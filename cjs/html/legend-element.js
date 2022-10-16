'use strict';
const {HTMLElement} = require('./element.js');

class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLegendElement = HTMLLegendElement
