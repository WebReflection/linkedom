'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'li';

/**
 * @implements globalThis.HTMLLIElement
 */
class HTMLLIElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLLIElement = HTMLLIElement

registerHTMLClass(tagName, HTMLLIElement);
