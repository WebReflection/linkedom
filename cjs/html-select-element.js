'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLSelectElement
 */
class HTMLSelectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'select') {
    super(ownerDocument, localName);
  }
}
exports.HTMLSelectElement = HTMLSelectElement
