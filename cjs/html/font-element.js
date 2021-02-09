'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLFontElement
 */
class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFontElement = HTMLFontElement
