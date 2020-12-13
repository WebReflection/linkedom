'use strict';
const {Type} = require('./common.js');
const {Node} = require('./node.js');

const COMMENT_NODE = Type.Comment;
exports.COMMENT_NODE = COMMENT_NODE;

class Comment extends Node {
  /**
   * @param {string} value 
   */
  constructor(value) {
    super(COMMENT_NODE, '#comment');
    this.value = value;
  }

  toString() {
    return `<!--${this.value}-->`;
  }
}
exports.Comment = Comment;
