'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLSpanElement
 */
class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}
exports.HTMLSpanElement = HTMLSpanElement
