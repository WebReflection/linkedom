'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLFrameElement
 */
class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFrameElement = HTMLFrameElement
