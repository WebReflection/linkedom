'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');

const {TextElement} = require('./text-element.js');

const tagName = 'style';

/**
 * @implements globalThis.HTMLStyleElement
 */
class HTMLStyleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLStyleElement);

exports.HTMLStyleElement = HTMLStyleElement;
