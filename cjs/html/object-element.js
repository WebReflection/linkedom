'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLObjectElement
 */
class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
exports.HTMLObjectElement = HTMLObjectElement
