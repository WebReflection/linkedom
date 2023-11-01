'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'br';

/**
 * @implements globalThis.HTMLBRElement
 */
class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLBRElement = HTMLBRElement

registerHTMLClass(tagName, HTMLBRElement);
