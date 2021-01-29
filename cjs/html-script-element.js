'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends HTMLElement {
  constructor(ownerDocument, localName = 'script') {
    super(ownerDocument, localName);
  }
}
exports.HTMLScriptElement = HTMLScriptElement
