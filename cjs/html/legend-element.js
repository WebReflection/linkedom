'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'legend';

/**
 * @implements globalThis.HTMLLegendElement
 */
class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLLegendElement = HTMLLegendElement

registerHTMLClass(tagName, HTMLLegendElement);
