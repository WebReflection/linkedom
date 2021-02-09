'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLDListElement
 */
class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDListElement = HTMLDListElement
