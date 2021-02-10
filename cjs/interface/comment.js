'use strict';
const {escape} = require('html-escaper');

const {COMMENT_NODE} = require('../shared/constants.js');
const {VALUE} = require('../shared/symbols.js');

const {CharacterData} = require('./character-data.js');

/**
 * @implements globalThis.Comment
 */
class Comment extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#comment', COMMENT_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Comment(ownerDocument, data);
  }

  toString() { return `<!--${escape(this[VALUE])}-->`; }
}
exports.Comment = Comment
