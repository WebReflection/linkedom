'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'area';

/**
 * @implements globalThis.HTMLAreaElement
 */
class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLAreaElement = HTMLAreaElement

registerHTMLClass(tagName, HTMLAreaElement);