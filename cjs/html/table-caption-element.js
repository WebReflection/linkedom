'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'caption') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableCaptionElement = HTMLTableCaptionElement
