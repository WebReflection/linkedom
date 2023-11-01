'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require("../shared/register-html-class.js");

const tagName = 'marquee';

/**
 * @implements globalThis.HTMLMarqueeElement
 */
class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLMarqueeElement = HTMLMarqueeElement

registerHTMLClass(tagName, HTMLMarqueeElement);
