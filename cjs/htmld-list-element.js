'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLDListElement
 */
class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDListElement = HTMLDListElement
