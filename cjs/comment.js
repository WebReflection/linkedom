'use strict';
const {escape} = require('html-escaper');

const {COMMENT_NODE} = require('./constants.js');
const {NodeText} = require('./node.js');

class Comment extends NodeText {

  constructor(ownerDocument, textContent) {
    super(ownerDocument, '#comment', textContent, COMMENT_NODE);
  }

  toString() {
    return `<!--${escape(this.textContent)}-->`;
  }
}
exports.Comment = Comment
