'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLMapElement
 */
class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMapElement = HTMLMapElement
