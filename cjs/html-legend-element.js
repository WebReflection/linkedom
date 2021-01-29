'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLLegendElement
 */
class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLegendElement = HTMLLegendElement
