'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'td';

/**
 * @implements globalThis.HTMLTableCellElement
 */
class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableCellElement = HTMLTableCellElement

registerHTMLClass(tagName, HTMLTableCellElement);
