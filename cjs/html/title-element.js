'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');

const {TextElement} = require('./text-element.js');

const tagName = 'title';

class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLTitleElement);

exports.HTMLTitleElement = HTMLTitleElement;
