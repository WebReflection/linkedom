'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'base';

/**
 * @implements globalThis.HTMLBaseElement
 */
class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLBaseElement = HTMLBaseElement

registerHTMLClass(tagName, HTMLBaseElement);
