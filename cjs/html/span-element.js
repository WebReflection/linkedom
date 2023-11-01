'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'span';

/**
 * @implements globalThis.HTMLSpanElement
 */
class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLSpanElement = HTMLSpanElement

registerHTMLClass(tagName, HTMLSpanElement);
