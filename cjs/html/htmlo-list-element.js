'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLOListElement
 */
class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ol') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOListElement = HTMLOListElement
