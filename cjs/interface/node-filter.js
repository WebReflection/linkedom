'use strict';
const {
  SHOW_ALL,
  SHOW_ELEMENT,
  SHOW_COMMENT,
  SHOW_CDATA_SECTION,
  SHOW_TEXT
} = require('../shared/constants.js');

class NodeFilter {
  static get SHOW_ALL() { return SHOW_ALL; }
  static get SHOW_ELEMENT() { return SHOW_ELEMENT; }
  static get SHOW_COMMENT() { return SHOW_COMMENT; }
  static get SHOW_CDATA_SECTION() { return SHOW_CDATA_SECTION; }
  static get SHOW_TEXT() { return SHOW_TEXT; }
}
exports.NodeFilter = NodeFilter
