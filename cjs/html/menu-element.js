'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLMenuElement
 */
class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMenuElement = HTMLMenuElement
