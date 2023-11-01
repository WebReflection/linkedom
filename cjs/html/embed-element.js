'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'embed';

/**
 * @implements globalThis.HTMLEmbedElement
 */
class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLEmbedElement = HTMLEmbedElement

registerHTMLClass(tagName, HTMLEmbedElement);
