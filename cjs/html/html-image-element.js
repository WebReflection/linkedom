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

  /* c8 ignore start */
  get width() { return accessorAttribute.get(this, 'width'); }
  set width(value) { accessorAttribute.set(this, 'width', value); }
  
  get height() { return accessorAttribute.get(this, 'height'); }
  set height(value) { accessorAttribute.set(this, 'height', value); }

  get srcset() { return accessorAttribute.get(this, 'srcset'); }
  set srcset(value) { accessorAttribute.set(this, 'srcset', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLImageElement);

exports.HTMLImageElement = HTMLImageElement;
