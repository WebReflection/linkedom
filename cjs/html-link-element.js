'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLLinkElement
 */
class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = 'link') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLinkElement = HTMLLinkElement
