'use strict';
const {VALUE} = require('../shared/symbols.js');
const {emptyAttributes} = require('../shared/attributes.js');
const {escape} = require('../shared/text-escaper.js');
const {Attr} = require('./attr.js');

const QUOTE = /"/g;

/**
 * @implements globalThis.Attr
 */
class XMLAttr extends Attr {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    return emptyAttributes.has(name) && !value ?
            name : `${name}="${escape(value).replace(QUOTE, "&quot;")}"`;
  }
}
exports.XMLAttr = XMLAttr
