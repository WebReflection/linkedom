'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLSpanElement
 */
class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}
exports.HTMLSpanElement = HTMLSpanElement
