'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLMeterElement
 */
class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMeterElement = HTMLMeterElement
