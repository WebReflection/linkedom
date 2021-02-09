'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLTrackElement
 */
class HTMLTrackElement extends HTMLElement {
  constructor(ownerDocument, localName = 'track') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTrackElement = HTMLTrackElement
