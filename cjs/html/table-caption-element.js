'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'caption';

/**
 * @implements globalThis.HTMLTableCaptionElement
 */
class HTMLTableCaptionElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableCaptionElement = HTMLTableCaptionElement

registerHTMLClass(tagName, HTMLTableCaptionElement);
