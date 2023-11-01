'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'p';

/**
 * @implements globalThis.HTMLParagraphElement
 */
class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLParagraphElement = HTMLParagraphElement

registerHTMLClass(tagName, HTMLParagraphElement);
