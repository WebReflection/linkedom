'use strict';
const {Type} = require('./common.js');
const {Node} = require('./node.js');

const TEXT_NODE = Type.Text;
exports.TEXT_NODE = TEXT_NODE;

class Text extends Node {
  /**
   * @param {string} value 
   */
  constructor(value) {
    super(TEXT_NODE, '#text');
    this.value = value;
  }

  toString() {
    return this.value;
  }
}
exports.Text = Text;
