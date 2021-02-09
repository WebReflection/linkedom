'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLSlotElement
 */
class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = 'slot') {
    super(ownerDocument, localName);
  }
}
exports.HTMLSlotElement = HTMLSlotElement
