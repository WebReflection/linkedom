'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLFrameSetElement
 */
class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFrameSetElement = HTMLFrameSetElement
