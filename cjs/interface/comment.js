'use strict';
const {COMMENT_NODE} = require('../shared/constants.js');
const {VALUE} = require('../shared/symbols.js');

const {CharacterData} = require('./character-data.js');

class Comment extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#comment', COMMENT_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Comment(ownerDocument, data);
  }

  toString() { return `<!--${this[VALUE]}-->`; }
}
exports.Comment = Comment
