'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLTimeElement
 */
class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTimeElement = HTMLTimeElement
