'use strict';
const {HTMLElement} = require('./html-element.js');

/**
 * @implements globalThis.HTMLHRElement
 */
class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}
exports.HTMLHRElement = HTMLHRElement
