'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLOptGroupElement
 */
class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}
exports.HTMLOptGroupElement = HTMLOptGroupElement
