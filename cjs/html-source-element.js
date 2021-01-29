'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLSourceElement
 */
class HTMLSourceElement extends HTMLElement {
  constructor(ownerDocument, localName = 'source') {
    super(ownerDocument, localName);
  }
}
exports.HTMLSourceElement = HTMLSourceElement
