'use strict';
const {registerHTMLClass} = require('../utils.js');
const {TextElement} = require('../text-element.js');

const tagName = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLStyleElement = HTMLStyleElement

registerHTMLClass(tagName, HTMLStyleElement);

exports.HTMLStyleElement = HTMLStyleElement;
