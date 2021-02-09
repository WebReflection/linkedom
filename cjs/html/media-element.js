'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLMediaElement
 */
class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMediaElement = HTMLMediaElement
