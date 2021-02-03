'use strict';
// shamelessly borrowed from myself @ (one day I might rewrite this)
// https://github.com/WebReflection/basicHTML/blob/master/src/TreeWalker.js

const {
  DOCUMENT_NODE,
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  COMMENT_NODE,
  SHOW_ALL,
  SHOW_COMMENT,
  SHOW_ELEMENT
} = require('./constants.js');

// this is dumb, but it works for uhtml 😎
const isOK = ({nodeType}, mask) => {
  if (mask === SHOW_ALL && nodeType !== ELEMENT_NODE_END)
    return true;
  const OTHERS = SHOW_ELEMENT | SHOW_COMMENT;
  switch (nodeType) {
    case ELEMENT_NODE:
      return mask === SHOW_ELEMENT || mask === OTHERS;
    case COMMENT_NODE:
      /* c8 ignore next */
      return mask === SHOW_COMMENT || mask === OTHERS;
  }
  return false;
};

/**
 * @implements globalThis.TreeWalker
 */
class TreeWalker {
  constructor(root, whatToShow = SHOW_ALL) {
    this.root = root;
    this.currentNode = null;
    this.whatToShow = whatToShow;
    let {_next, _end} = root;
    if (root.nodeType === DOCUMENT_NODE) {
      _next = root.root;
      _end = root.root._end;
    }
    this._next = _next;
    this._end = _end;
  }

  nextNode() {
    let {_next, _end} = this;
    while (_next !== _end) {
      this._next = _next._next;
      if (isOK(_next, this.whatToShow))
        return (this.currentNode = _next);
      _next = this._next;
    }
    return (this.currentNode = null);
  }
}
exports.TreeWalker = TreeWalker
