'use strict';
const {HTMLElement} = require('./element.js');

class HTMLFrameSetElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frameset') {
    super(ownerDocument, localName);
  }
}
exports.HTMLFrameSetElement = HTMLFrameSetElement
