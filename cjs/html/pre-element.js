'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'pre';

/**
 * @implements globalThis.HTMLPreElement
 */
class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLPreElement = HTMLPreElement

registerHTMLClass(tagName, HTMLPreElement);
