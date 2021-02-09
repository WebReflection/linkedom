'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLMetaElement
 */
class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMetaElement = HTMLMetaElement
