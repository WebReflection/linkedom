'use strict';
// shamelessly borrowed from myself @ (one day I might rewrite this)
// https://github.com/WebReflection/basicHTML/blob/master/src/TreeWalker.js

const {
  SHOW_ALL,
  SHOW_COMMENT,
  SHOW_ELEMENT
} = require('./constants.js');

const flat = (parentNode, list) => {
  const root = !list;
  if (root)
    list = new Set;
  else
    list.add(parentNode);
  const {childNodes, nextSibling} = parentNode;
  for (let i = 0, {length} = childNodes; i < length; i++)
    flat(childNodes[i], list);
  if (!root && nextSibling)
    flat(nextSibling, list);
  if (root)
    return [...list];
};

// this is dumb, but it works for uhtml 😎
const isOK = ({nodeType}, mask) => {
  if (mask === SHOW_ALL)
    return true;
  const OTHERS = SHOW_ELEMENT | SHOW_COMMENT;
  switch (nodeType) {
    case 1:
      return mask === SHOW_ELEMENT || mask === OTHERS;
    case 8:
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
    this._list = flat(root);
    this._i = 0;
    this._length = this._list.length;
  }

  nextNode() {
    while (this._i < this._length) {
      const currentNode = this._list[this._i++];
      if (isOK(currentNode, this.whatToShow))
        return (this.currentNode = currentNode);
    }
    return (this.currentNode = null);
  }
}
exports.TreeWalker = TreeWalker
