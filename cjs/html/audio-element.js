'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'audio';

/**
 * @implements globalThis.HTMLAudioElement
 */
class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLAudioElement = HTMLAudioElement

registerHTMLClass(tagName, HTMLAudioElement);