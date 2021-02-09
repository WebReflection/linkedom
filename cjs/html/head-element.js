'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLHeadElement
 */
class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = 'head') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHeadElement = HTMLHeadElement
