'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = 'img') {
    super(ownerDocument, localName);
  }
}
exports.HTMLImageElement = HTMLImageElement
