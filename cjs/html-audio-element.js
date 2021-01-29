'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLAudioElement
 */
class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = 'audio') {
    super(ownerDocument, localName);
  }
}
exports.HTMLAudioElement = HTMLAudioElement
