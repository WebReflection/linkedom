'use strict';
const {HTMLElement} = require('./element.js');

class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = 'audio') {
    super(ownerDocument, localName);
  }
}
exports.HTMLAudioElement = HTMLAudioElement
