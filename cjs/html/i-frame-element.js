'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');
const {stringAttribute} = require('../shared/attributes.js');

const {HTMLElement} = require('./element.js');

const tagName = 'iframe';

/**
 * @implements globalThis.HTMLIFrameElement
 */
class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get src() { return stringAttribute.get(this, 'src'); }
  set src(value) { stringAttribute.set(this, 'src', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLIFrameElement);

exports.HTMLIFrameElement = HTMLIFrameElement;
