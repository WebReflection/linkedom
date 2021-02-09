'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLVideoElement
 */
class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}
exports.HTMLVideoElement = HTMLVideoElement
