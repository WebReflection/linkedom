'use strict';
const {HTMLElement} = require('./element.js');

/**
 * @implements globalThis.HTMLFieldSetElement
 */
class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFieldSetElement = HTMLFieldSetElement
