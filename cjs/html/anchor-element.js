'use strict';
const {registerHTMLClass} = require('../shared/register-html-class.js');
const {stringAttribute, urlAttribute} = require('../shared/attributes.js');

const {HTMLElement} = require('./element.js');

const tagName = 'a';

/**
 * @implements globalThis.HTMLAnchorElement
 */
class HTMLAnchorElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */ // copy paste from img.src, already covered
  get href() { return urlAttribute.get(this, 'href'); }
  set href(value) { urlAttribute.set(this, 'href', value); }

  get download() { return encodeURI(stringAttribute.get(this, 'download')); }
  set download(value) { stringAttribute.set(this, 'download', decodeURI(value)); }

  get target() { return stringAttribute.get(this, 'target'); }
  set target(value) { stringAttribute.set(this, 'target', value); }

  get type() { return stringAttribute.get(this, 'type'); }
  set type(value) { stringAttribute.set(this, 'type', value); }
  /* c8 ignore stop */

}

registerHTMLClass(tagName, HTMLAnchorElement);

exports.HTMLAnchorElement = HTMLAnchorElement;
