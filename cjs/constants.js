'use strict';
const ELEMENT_NODE_END = -1;
exports.ELEMENT_NODE_END = ELEMENT_NODE_END;
const ELEMENT_NODE = 1;
exports.ELEMENT_NODE = ELEMENT_NODE;
const ATTRIBUTE_NODE = 2;
exports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;
const TEXT_NODE = 3;
exports.TEXT_NODE = TEXT_NODE;
const COMMENT_NODE = 8;
exports.COMMENT_NODE = COMMENT_NODE;
const DOCUMENT_NODE = 9;
exports.DOCUMENT_NODE = DOCUMENT_NODE;
const DOCUMENT_FRAGMENT_NODE = 11;
exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;

/**
 * A symbol classifier for DOM nodes.
 */
const DOM = Symbol('DOM');
exports.DOM = DOM;

/**
 * TreeWalker related
 */

const SHOW_ALL = -1;
exports.SHOW_ALL = SHOW_ALL;
const SHOW_COMMENT = 128;
exports.SHOW_COMMENT = SHOW_COMMENT;
const SHOW_ELEMENT = 1;
exports.SHOW_ELEMENT = SHOW_ELEMENT;
