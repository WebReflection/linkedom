'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLCanvasElement
 */
class HTMLCanvasElement extends HTMLElement {
  constructor(ownerDocument, localName = 'canvas') {
    super(ownerDocument, localName);
  }
}
exports.HTMLCanvasElement = HTMLCanvasElement
