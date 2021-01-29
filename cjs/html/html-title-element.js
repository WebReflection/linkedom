'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends HTMLElement {
  constructor(ownerDocument, localName = 'title') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTitleElement = HTMLTitleElement
