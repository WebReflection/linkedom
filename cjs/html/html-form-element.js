'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLFormElement
 */
class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = 'form') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFormElement = HTMLFormElement
