'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'picture';

/**
 * @implements globalThis.HTMLPictureElement
 */
class HTMLPictureElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLPictureElement = HTMLPictureElement

registerHTMLClass(tagName, HTMLPictureElement);
