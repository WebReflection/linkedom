// Internal
export const NODE_END = -1;

// Node
export const ELEMENT_NODE = 1;
export const ATTRIBUTE_NODE = 2;
export const TEXT_NODE = 3;
export const COMMENT_NODE = 8;
export const DOCUMENT_NODE = 9;
export const DOCUMENT_TYPE_NODE = 10;
export const DOCUMENT_FRAGMENT_NODE = 11;

// Elements
export const BLOCK_ELEMENTS = new Set(['ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS', 'CAPTION', 'COL', 'COLGROUP', 'DD', 'DIV', 'DL', 'DT', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'UL', 'OL', 'P']);

// TreeWalker
export const SHOW_ALL = -1;
export const SHOW_ELEMENT = 1;
export const SHOW_TEXT = 4;
export const SHOW_COMMENT = 128;

// Document position
export const DOCUMENT_POSITION_DISCONNECTED = 0x01;
export const DOCUMENT_POSITION_PRECEDING = 0x02;
export const DOCUMENT_POSITION_FOLLOWING = 0x04;
export const DOCUMENT_POSITION_CONTAINS = 0x08;
export const DOCUMENT_POSITION_CONTAINED_BY = 0x10;
export const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;

// SVG
export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
