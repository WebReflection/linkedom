'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLProgressElement
 */
class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = 'progress') {
    super(ownerDocument, localName);
  }
}
exports.HTMLProgressElement = HTMLProgressElement
