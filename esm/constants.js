export const ELEMENT_NODE_END = -1;
export const ELEMENT_NODE = 1;
export const ATTRIBUTE_NODE = 2;
export const TEXT_NODE = 3;
export const COMMENT_NODE = 8;
export const DOCUMENT_NODE = 9;
export const DOCUMENT_FRAGMENT_NODE = 11;

/**
 * A symbol classifier for DOM nodes.
 */
export const DOM = Symbol('DOM');

/**
 * TreeWalker related
 */

export const SHOW_ALL = -1;
export const SHOW_COMMENT = 128;
export const SHOW_ELEMENT = 1;
