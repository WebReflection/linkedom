'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLParamElement
 */
class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}
exports.HTMLParamElement = HTMLParamElement
