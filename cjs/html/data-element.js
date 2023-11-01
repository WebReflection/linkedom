'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'data';

/**
 * @implements globalThis.HTMLDataElement
 */
class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDataElement = HTMLDataElement

registerHTMLClass(tagName, HTMLDataElement);
