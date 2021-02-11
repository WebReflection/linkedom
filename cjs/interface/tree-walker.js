'use strict';
const {
  DOCUMENT_NODE,
  ELEMENT_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  SHOW_ALL,
  SHOW_ELEMENT,
  SHOW_COMMENT,
  SHOW_TEXT
} = require('../shared/constants.js');

const {PRIVATE, END, NEXT} = require('../shared/symbols.js');

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
class TreeWalker {
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
    const nodes = [];
    while (next !== end) {
      if (isOK(next, whatToShow))
        nodes.push(next);
      next = next[NEXT];
    }
    this[PRIVATE] = {i: 0, nodes};
  }

  nextNode() {
    const $ = this[PRIVATE];
    this.currentNode = $.i < $.nodes.length ? $.nodes[$.i++] : null;
    return this.currentNode;
  }
}
exports.TreeWalker = TreeWalker
