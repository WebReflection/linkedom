import {COMMENT_NODE} from '../shared/constants.js';
import {VALUE, MIME} from '../shared/symbols.js';
import {escape} from '../shared/text-escaper.js';

import {CharacterData} from './character-data.js';

/**
 * @implements globalThis.Comment
 */
export class Comment extends CharacterData {
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