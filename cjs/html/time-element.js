'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'time';

/**
 * @implements globalThis.HTMLTimeElement
 */
class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLTimeElement = HTMLTimeElement

registerHTMLClass(tagName, HTMLTimeElement);
