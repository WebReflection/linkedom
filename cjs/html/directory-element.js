'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLDirectoryElement
 */
class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDirectoryElement = HTMLDirectoryElement
