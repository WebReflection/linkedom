'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLFieldSetElement
 */
class HTMLFieldSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'fieldset') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFieldSetElement = HTMLFieldSetElement
