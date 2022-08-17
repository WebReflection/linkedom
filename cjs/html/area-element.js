'use strict';
const {HTMLElement} = require('./element.js');
const {urlAttribute} = require('../shared/attributes.js');

/**
 * @implements globalThis.HTMLAreaElement
 */
class HTMLAreaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'area') {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get href() { return urlAttribute.get(this, 'href'); }
  set href(value) { urlAttribute.set(this, 'href', value); }
  /* c8 ignore stop */
}
exports.HTMLAreaElement = HTMLAreaElement
