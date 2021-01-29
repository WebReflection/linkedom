'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLEmbedElement
 */
class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}
exports.HTMLEmbedElement = HTMLEmbedElement
