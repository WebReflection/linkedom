'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'ol';

/**
 * @implements globalThis.HTMLOListElement
 */
class HTMLOListElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLOListElement = HTMLOListElement

registerHTMLClass(tagName, HTMLOListElement);
