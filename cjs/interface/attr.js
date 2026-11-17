'use strict';
const {ATTRIBUTE_NODE} = require('../shared/constants.js');
const {CHANGED, VALUE} = require('../shared/symbols.js');
const {String, ignoreCase} = require('../shared/utils.js');
const {attrAsJSON} = require('../shared/jsdon.js');
const {emptyAttributes} = require('../shared/attributes.js');

const {attributeChangedCallback: moAttributes} = require('./mutation-observer.js');
const {attributeChangedCallback: ceAttributes} = require('./custom-element-registry.js');

const {Node} = require('./node.js');
const {escape} = require('../shared/text-escaper.js');
const {decodeHTMLAttribute} = require('entities/decode');

const QUOTE = /"/g;
const AMP = /&/g;

// HTML keeps a raw & (e.g. ?a=1&b=2) unless the parser would read a character reference.
const escapeAmpersands = value => decodeHTMLAttribute(value) === value ? value : value.replace(AMP, '&amp;');

/**
 * @implements globalThis.Attr
 */
class Attr extends Node {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, name, ATTRIBUTE_NODE);
    this.ownerElement = null;
    this.name = String(name);
    this[VALUE] = String(value);
    this[CHANGED] = false;
  }

  get value() { return this[VALUE]; }
  set value(newValue) {
    const {[VALUE]: oldValue, name, ownerElement} = this;
    this[VALUE] = String(newValue);
    this[CHANGED] = true;
    if (ownerElement) {
      moAttributes(ownerElement, name, oldValue);
      ceAttributes(ownerElement, name, oldValue, this[VALUE]);
    }
  }

  cloneNode() {
    const {ownerDocument, name, [VALUE]: value} = this;
    return new Attr(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    if (emptyAttributes.has(name) && !value) {
      return ignoreCase(this) ? name : `${name}=""`;
    }
    const escapedValue = (ignoreCase(this) ? escapeAmpersands(value) : escape(value)).replace(QUOTE, '&quot;');
    return `${name}="${escapedValue}"`;
  }

  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
}
exports.Attr = Attr
