'use strict';
const {escape} = require('html-escaper');

const {ATTRIBUTE_NODE} = require('./constants.js');
const {String} = require('./utils.js');
const {NodeLess} = require('./node.js');

/**
 * @implements globalThis.Attr
 */
class Attr extends NodeLess {

  constructor(ownerDocument, name, value) {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.name = String(name);
    this.value = String(value);

    /**
     * @type {HTMLElement?}
     */
    this.ownerElement = null;
  }

  toString() {
    const {name, value} = this;
    return value ? `${name}="${escape(this.value)}"` : name;
  }
}
exports.Attr = Attr
