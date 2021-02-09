'use strict';
const {
  COMMENT_NODE,
  DOCUMENT_NODE,
  DOCUMENT_FRAGMENT_NODE,
  TEXT_NODE,
  NODE_END
} = require('./constants.js');

const {START, NEXT, PREV} = require('./symbols.js');
const {getEnd} = require('./utils.js');

const isConnected = ({ownerDocument, parentNode}) => {
  while (parentNode) {
    if (parentNode === ownerDocument)
      return true;
    parentNode = parentNode.parentNode;
  }
  return false;
};
exports.isConnected = isConnected;

const parentElement = ({parentNode}) => {
  if (parentNode) {
    switch (parentNode.nodeType) {
      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        return null;
    }
  }
  return parentNode;
};
exports.parentElement = parentElement;

const previousSibling = ({[PREV]: prev}) => {
  switch (prev ? prev.nodeType : 0) {
    case NODE_END:
      return prev[START];
    case TEXT_NODE:
    case COMMENT_NODE:
      return prev;
  }
  return null;
};
exports.previousSibling = previousSibling;

const nextSibling = node => {
  const next = getEnd(node)[NEXT];
  return next && (next.nodeType === NODE_END ? null : next);
};
exports.nextSibling = nextSibling;
