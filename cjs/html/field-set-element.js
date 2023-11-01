'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'fieldset';

/**
 * @implements globalThis.HTMLFieldSetElement
 */
class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLFieldSetElement = HTMLFieldSetElement

registerHTMLClass(tagName, HTMLFieldSetElement);
