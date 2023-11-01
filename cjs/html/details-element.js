'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'details';

/**
 * @implements globalThis.HTMLDetailsElement
 */
class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDetailsElement = HTMLDetailsElement

registerHTMLClass(tagName, HTMLDetailsElement);
