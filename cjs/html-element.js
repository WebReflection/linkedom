'use strict';
const {Element} = require('./element.js');

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element {
  // flipped to allow empty constructor and/or a global document
  constructor(localName = 'element', ownerDocument = globalThis.document) {
    super(ownerDocument, localName);
  }
}
exports.HTMLElement = HTMLElement
