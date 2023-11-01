'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'body';

/**
 * @implements globalThis.HTMLBodyElement
 */
class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLBodyElement = HTMLBodyElement

registerHTMLClass(tagName, HTMLBodyElement);
