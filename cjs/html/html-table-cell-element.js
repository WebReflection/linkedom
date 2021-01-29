'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLTableCellElement
 */
class HTMLTableCellElement extends HTMLElement {
  constructor(ownerDocument, localName = 'td') {
    super(ownerDocument, localName);
  }
}
exports.HTMLTableCellElement = HTMLTableCellElement
