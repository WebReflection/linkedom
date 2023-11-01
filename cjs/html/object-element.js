'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'object';

/**
 * @implements globalThis.HTMLObjectElement
 */
class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLObjectElement = HTMLObjectElement

registerHTMLClass(tagName, HTMLObjectElement);
