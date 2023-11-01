'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'hr';

/**
 * @implements globalThis.HTMLHRElement
 */
class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLHRElement = HTMLHRElement

registerHTMLClass(tagName, HTMLHRElement);
