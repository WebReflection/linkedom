'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'dir';

/**
 * @implements globalThis.HTMLDirectoryElement
 */
class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDirectoryElement = HTMLDirectoryElement

registerHTMLClass(tagName, HTMLDirectoryElement);
