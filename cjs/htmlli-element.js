'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLLIElement
 */
class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = 'li') {
    super(ownerDocument, localName);
  }
}
exports.HTMLLIElement = HTMLLIElement
