'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLBaseElement
 */
class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}
exports.HTMLBaseElement = HTMLBaseElement
