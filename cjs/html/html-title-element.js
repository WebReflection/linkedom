'use strict';
const {registerHTMLClass} = require('../utils.js');
const {TextElement} = require('../text-element.js');

const tagName = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}
exports.HTMLTitleElement = HTMLTitleElement

registerHTMLClass(tagName, HTMLTitleElement);

exports.HTMLTitleElement = HTMLTitleElement;
