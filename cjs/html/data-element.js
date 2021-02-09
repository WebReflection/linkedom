'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLDataElement
 */
class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDataElement = HTMLDataElement
