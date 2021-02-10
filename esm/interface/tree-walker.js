import {
  DOCUMENT_NODE,
  ELEMENT_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  SHOW_ALL,
  SHOW_ELEMENT,
  SHOW_COMMENT,
  SHOW_TEXT
} from '../shared/constants.js';

import {END, NEXT} from '../shared/symbols.js';

const isOK = ({nodeType}, mask) => {
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask & SHOW_ELEMENT;
    case TEXT_NODE:
      return mask & SHOW_TEXT;
    case COMMENT_NODE:
      return mask & SHOW_COMMENT;
  }
  return 0;
};

/**
 * @implements globalThis.TreeWalker
 */
export class TreeWalker {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.currentNode = root;
    this.whatToShow = whatToShow;
    let {[NEXT]: next, [END]: end} = root;
    if (root.nodeType === DOCUMENT_NODE) {
      const {documentElement} = root;
      next = documentElement;
      end = documentElement[END];
    }
    this[NEXT] = next;
    this[END] = end;
  }

  nextNode() {
    let {[NEXT]: next, [END]: end, whatToShow} = this;
    while (next !== end) {
      this[NEXT] = next[NEXT];
      if (isOK(next, whatToShow))
        return (this.currentNode = next);
      next = this[NEXT];
    }
    return (this.currentNode = null);
  }
}
