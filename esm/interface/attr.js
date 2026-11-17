import {ATTRIBUTE_NODE} from '../shared/constants.js';
import {CHANGED, VALUE} from '../shared/symbols.js';
import {String, ignoreCase} from '../shared/utils.js';
import {attrAsJSON} from '../shared/jsdon.js';
import {emptyAttributes} from '../shared/attributes.js';

import {attributeChangedCallback as moAttributes} from './mutation-observer.js';
import {attributeChangedCallback as ceAttributes} from './custom-element-registry.js';

import {Node} from './node.js';
import {escape} from '../shared/text-escaper.js';
import {decodeHTMLAttribute} from 'entities/decode';

const QUOTE = /"/g;
const AMP = /&/g;

// HTML keeps a raw & (e.g. ?a=1&b=2) unless the parser would read a character reference.
const escapeAmpersands = value => decodeHTMLAttribute(value) === value ? value : value.replace(AMP, '&amp;');

/**
 * @implements globalThis.Attr
 */
export class Attr extends Node {
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
