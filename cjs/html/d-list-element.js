'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'dl';

/**
 * @implements globalThis.HTMLDListElement
 */
class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDListElement = HTMLDListElement

registerHTMLClass(tagName, HTMLDListElement);
