'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLParagraphElement
 */
class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}
exports.HTMLParagraphElement = HTMLParagraphElement
