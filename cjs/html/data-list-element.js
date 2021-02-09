'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLDataListElement
 */
class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'datalist') {
    super(ownerDocument, localName);
  }
}
exports.HTMLDataListElement = HTMLDataListElement
