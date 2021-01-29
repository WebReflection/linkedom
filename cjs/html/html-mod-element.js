'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLModElement
 */
class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}
exports.HTMLModElement = HTMLModElement
