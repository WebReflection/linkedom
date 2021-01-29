'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLIFrameElement
 */
class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'iframe') {
    super(ownerDocument, localName);
  }
}
exports.HTMLIFrameElement = HTMLIFrameElement
