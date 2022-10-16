'use strict';
const {HTMLElement} = require('./element.js');

class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMeterElement = HTMLMeterElement
