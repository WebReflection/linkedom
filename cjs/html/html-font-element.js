'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLFontElement
 */
class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = 'font') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFontElement = HTMLFontElement
