'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'progress';

/**
 * @implements globalThis.HTMLProgressElement
 */
class HTMLProgressElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLProgressElement = HTMLProgressElement

registerHTMLClass(tagName, HTMLProgressElement);
