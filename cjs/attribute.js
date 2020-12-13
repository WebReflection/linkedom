'use strict';
const {Type} = require('./common.js');
const {Node} = require('./node.js');

const ATTRIBUTE_NODE = Type.Attribute;
exports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;

class Attribute extends Node {
  /**
   * @param {string} localName the attribute localName
   * @param {string} value the attribute value
   */
  constructor(localName, value) {
    super(ATTRIBUTE_NODE, localName);
    this.value = value;
  }

  toString() {
    const {name, value} = this;
    return value ? `${name}="${value}"` : name;
  }
}
exports.Attribute = Attribute;
