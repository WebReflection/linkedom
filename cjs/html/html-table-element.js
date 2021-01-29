'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTableElement
 */
class HTMLTableElement extends HTMLElement {
  constructor(ownerDocument, localName = 'table') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableElement = HTMLTableElement
