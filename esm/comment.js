import {escape} from 'html-escaper';

import {COMMENT_NODE} from './constants.js';
import {NodeText} from './node.js';

export class Comment extends NodeText {

  constructor(ownerDocument, textContent) {
    super(ownerDocument, '#comment', textContent, COMMENT_NODE);
  }

  toString() {
    return `<!--${escape(this.textContent)}-->`;
  }
}
