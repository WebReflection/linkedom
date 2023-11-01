'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'video';

/**
 * @implements globalThis.HTMLVideoElement
 */
class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLVideoElement = HTMLVideoElement

registerHTMLClass(tagName, HTMLVideoElement);
