'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'map';

/**
 * @implements globalThis.HTMLMapElement
 */
class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLMapElement = HTMLMapElement

registerHTMLClass(tagName, HTMLMapElement);
