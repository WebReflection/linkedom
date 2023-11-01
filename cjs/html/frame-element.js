'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'frame';

/**
 * @implements globalThis.HTMLFrameElement
 */
class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLFrameElement = HTMLFrameElement

registerHTMLClass(tagName, HTMLFrameElement);
