'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLDivElement
 */
class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDivElement = HTMLDivElement
