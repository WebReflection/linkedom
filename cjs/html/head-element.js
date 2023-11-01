'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'head';

/**
 * @implements globalThis.HTMLHeadElement
 */
class HTMLHeadElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLHeadElement = HTMLHeadElement

registerHTMLClass(tagName, HTMLHeadElement);
