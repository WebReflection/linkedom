import {COMMENT_NODE} from '../shared/constants.js';
import {VALUE} from '../shared/symbols.js';

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

  toString() { return `<!--${this[VALUE]}-->`; }
}
