'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'label';

/**
 * @implements globalThis.HTMLLabelElement
 */
class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLLabelElement = HTMLLabelElement

registerHTMLClass(tagName, HTMLLabelElement);
