'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLAreaElement
 */
class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }
}
exports.HTMLAreaElement = HTMLAreaElement
