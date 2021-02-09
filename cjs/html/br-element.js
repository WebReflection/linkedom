'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLBRElement
 */
class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}
exports.HTMLBRElement = HTMLBRElement
