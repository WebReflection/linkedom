'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = 'a') {
    super(ownerDocument, localName);
  }
}
exports.HTMLAnchorElement = HTMLAnchorElement
