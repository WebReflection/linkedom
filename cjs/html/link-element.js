'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');
const {booleanAttribute, stringAttribute} = require('../shared/attributes.js');

const {HTMLElement} = require('./element.js');

const tagName = 'img';

/**
 * @implements globalThis.HTMLLinkElement
 */
class HTMLLinkElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get href() { return stringAttribute.get(this, 'href'); }
  set href(value) { stringAttribute.set(this, 'href', value); }

  get hreflang() { return stringAttribute.get(this, 'hreflang'); }
  set hreflang(value) { stringAttribute.set(this, 'hreflang', value); }

  get media() { return stringAttribute.get(this, 'media'); }
  set media(value) { stringAttribute.set(this, 'media', value); }

  get rel() { return stringAttribute.get(this, 'rel'); }
  set rel(value) { stringAttribute.set(this, 'rel', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLLinkElement);

exports.HTMLLinkElement = HTMLLinkElement;
