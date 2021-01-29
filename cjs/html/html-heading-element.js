'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLHeadingElement
 */
class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = 'h1') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHeadingElement = HTMLHeadingElement
