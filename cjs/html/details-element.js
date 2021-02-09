'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLDetailsElement
 */
class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDetailsElement = HTMLDetailsElement
