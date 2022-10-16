'use strict';
const {HTMLElement} = require('./element.js');

class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}
exports.HTMLMapElement = HTMLMapElement
