'use strict';
const {numericAttribute, stringAttribute, registerHTMLClass} = require('../utils.js');
const {HTMLElement} = require('./html-element.js');

const tagName = 'img';

/**
 * @implements globalThis.HTMLImageElement
 */
class HTMLImageElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }

  /* c8 ignore start */
  get width() { return numericAttribute.get(this, 'width'); }
  set width(value) { numericAttribute.set(this, 'width', value); }
  
  get height() { return numericAttribute.get(this, 'height'); }
  set height(value) { numericAttribute.set(this, 'height', value); }

  get srcset() { return stringAttribute.get(this, 'srcset'); }
  set srcset(value) { stringAttribute.set(this, 'srcset', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLImageElement);

exports.HTMLImageElement = HTMLImageElement;
