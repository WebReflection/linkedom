'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLOptionElement
 */
class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = 'option') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOptionElement = HTMLOptionElement
