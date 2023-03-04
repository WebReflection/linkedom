'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require('../shared/register-html-class.js');
const { stringAttribute } = require('../shared/attributes.js');

const tagName = 'meta'
/**
 * @implements globalThis.HTMLMetaElement
 */
class HTMLMetaElement extends HTMLElement {
  constructor(ownerDocument, localName =tagName) {
    super(ownerDocument, localName);
  }

  get name() { return stringAttribute.get(this, 'name'); }
  set name(value) { stringAttribute.set(this, 'name', value); }

  get httpEquiv() { return stringAttribute.get(this, 'http-equiv'); }
  set httpEquiv(value) { stringAttribute.set(this, 'http-equiv', value); }

  get content() { return stringAttribute.get(this, 'content'); }
  set content(value) { stringAttribute.set(this, 'content', value); }

  get charset() { return stringAttribute.get(this, 'charset'); }
  set charset(value) { stringAttribute.set(this, 'charset', value); }

}
exports.HTMLMetaElement = HTMLMetaElement

registerHTMLClass(tagName, HTMLMetaElement);

