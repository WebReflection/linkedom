'use strict';
const {registerHTMLClass} = require('../utils.js');
const {TextElement} = require('../text-element.js');

const tagName = 'script';

/**
 * @implements globalThis.HTMLScriptElement
 */
class HTMLScriptElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLScriptElement);

exports.HTMLScriptElement = HTMLScriptElement;
