'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLHtmlElement
 */
class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHtmlElement = HTMLHtmlElement
