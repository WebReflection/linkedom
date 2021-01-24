'use strict';
const {escape} = require('html-escaper');

const {ATTRIBUTE_NODE} = require('./constants.js');
const {String} = require('./utils.js');
const {Node} = require('./node.js');

class Attribute extends Node {

  constructor(ownerDocument, name, value) {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.name = String(name);
    this.value = String(value);
    this.ownerElement = null;
  }

  toString() {
    return `${this.name}="${escape(this.value)}"`;
  }
}
exports.Attribute = Attribute
