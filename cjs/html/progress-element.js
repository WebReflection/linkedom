'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLProgressElement
 */
class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}
exports.HTMLProgressElement = HTMLProgressElement
