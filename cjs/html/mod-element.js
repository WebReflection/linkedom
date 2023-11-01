'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'mod';

/**
 * @implements globalThis.HTMLModElement
 */
class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLModElement = HTMLModElement

registerHTMLClass(tagName, HTMLModElement);
