'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'font';

/**
 * @implements globalThis.HTMLFontElement
 */
class HTMLFontElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLFontElement = HTMLFontElement

registerHTMLClass(tagName, HTMLFontElement);
