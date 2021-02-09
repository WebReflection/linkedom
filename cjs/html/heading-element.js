'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');

const {HTMLElement} = require('./element.js');

const tagName = 'h1';

/**
 * @implements globalThis.HTMLHeadingElement
 */
class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass([tagName, 'h2', 'h3', 'h4', 'h5', 'h6'], HTMLHeadingElement);

exports.HTMLHeadingElement = HTMLHeadingElement;
