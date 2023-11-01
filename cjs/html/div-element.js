'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'div';

/**
 * @implements globalThis.HTMLDivElement
 */
class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDivElement = HTMLDivElement

registerHTMLClass(tagName, HTMLDivElement);
