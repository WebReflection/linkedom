import {escape} from 'html-escaper';

import {ATTRIBUTE_NODE} from '../shared/constants.js';
import {CHANGED, VALUE} from '../shared/symbols.js';
import {String, ignoreCase} from '../shared/utils.js';
import {attrAsJSON} from '../shared/jsdon.js';

import {attributeChangedCallback as moAttributes} from './mutation-observer.js';
import {attributeChangedCallback as ceAttributes} from './custom-element-registry.js';

import {Node} from './node.js';

/**
 * @implements globalThis.Attr
 */
export class Attr extends Node {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
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
    return value || !ignoreCase(this) ? `${name}="${escape(value)}"` : name;
  }

  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
}
