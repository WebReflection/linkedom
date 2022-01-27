'use strict';
const {COMMENT_NODE} = require('../shared/constants.js');
const {VALUE, MIME} = require('../shared/symbols.js');
const {escape} = require('../shared/text-escaper.js');

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

  toString() { 
    const {ownerDocument} = this;
    if (ownerDocument[MIME].escapeHtmlEntities) {
      return `<!--${escape(this[VALUE])}-->`;
    }
    return `<!--${(this[VALUE])}-->`;
  }
}
exports.Comment = Comment