'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLUListElement
 */
class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}
exports.HTMLUListElement = HTMLUListElement
