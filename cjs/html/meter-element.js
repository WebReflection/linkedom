'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'meter';

/**
 * @implements globalThis.HTMLMeterElement
 */
class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLMeterElement = HTMLMeterElement

registerHTMLClass(tagName, HTMLMeterElement);
