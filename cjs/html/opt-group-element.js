'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'optgroup';

/**
 * @implements globalThis.HTMLOptGroupElement
 */
class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLOptGroupElement = HTMLOptGroupElement

registerHTMLClass(tagName, HTMLOptGroupElement);
