'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'param';

/**
 * @implements globalThis.HTMLParamElement
 */
class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLParamElement = HTMLParamElement

registerHTMLClass(tagName, HTMLParamElement);
