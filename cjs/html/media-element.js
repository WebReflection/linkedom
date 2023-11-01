'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'media';

/**
 * @implements globalThis.HTMLMediaElement
 */
class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLMediaElement = HTMLMediaElement

registerHTMLClass(tagName, HTMLMediaElement);
