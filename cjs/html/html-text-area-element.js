'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTextAreaElement
 */
class HTMLTextAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'textarea') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTextAreaElement = HTMLTextAreaElement
