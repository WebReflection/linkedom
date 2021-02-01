'use strict';
const {accessorAttribute, registerHTMLClass} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

const tagName = 'img';

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get src() { return accessorAttribute.get(this, 'src'); }
  set src(value) { accessorAttribute.set(this, 'src', value); }
}

registerHTMLClass(tagName, HTMLImageElement);

exports.HTMLImageElement = HTMLImageElement;
