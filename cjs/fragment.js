'use strict';
const {Type} = require('./common.js');
const {Element} = require('./element.js');

const DOCUMENT_FRAGMENT_NODE = Type.Fragment;
exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;

class Fragment extends Element {
  constructor() {
    super('#fragment');
    this.nodeType = DOCUMENT_FRAGMENT_NODE;
  }
}
exports.Fragment = Fragment;
