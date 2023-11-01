'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'datalist';

/**
 * @implements globalThis.HTMLDataListElement
 */
class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLDataListElement = HTMLDataListElement

registerHTMLClass(tagName, HTMLDataListElement);
