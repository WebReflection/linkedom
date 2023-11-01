'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'form';

/**
 * @implements globalThis.HTMLFormElement
 */
class HTMLFormElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLFormElement = HTMLFormElement

registerHTMLClass(tagName, HTMLFormElement);
