'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLMetaElement
 */
class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meta') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMetaElement = HTMLMetaElement
