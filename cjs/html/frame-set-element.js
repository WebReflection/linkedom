'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'frameset';

/**
 * @implements globalThis.HTMLFrameSetElement
 */
class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLFrameSetElement = HTMLFrameSetElement

registerHTMLClass(tagName, HTMLFrameSetElement);
