'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'menu';

/**
 * @implements globalThis.HTMLMenuElement
 */
class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLMenuElement = HTMLMenuElement

registerHTMLClass(tagName, HTMLMenuElement);
