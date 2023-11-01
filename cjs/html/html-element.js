'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'html';

/**
 * @implements globalThis.HTMLHtmlElement
 */
class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLHtmlElement = HTMLHtmlElement

registerHTMLClass(tagName, HTMLHtmlElement);
