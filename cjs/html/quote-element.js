'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'quote';

/**
 * @implements globalThis.HTMLQuoteElement
 */
class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLQuoteElement = HTMLQuoteElement

registerHTMLClass(tagName, HTMLQuoteElement);
