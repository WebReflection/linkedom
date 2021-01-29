'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLMeterElement
 */
class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMeterElement = HTMLMeterElement
