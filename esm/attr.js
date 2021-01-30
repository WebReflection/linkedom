import {escape} from 'html-escaper';

import {ATTRIBUTE_NODE} from './constants.js';
import {String} from './utils.js';
import {Node} from './node.js';

import {attributeChangedCallback as ceAttributes} from './custom-element-registry.js';
import {attributeChangedCallback as moAttributes} from './mutation-observer-class.js';

/**
 * @implements globalThis.Attr
 */
export class Attr extends Node {

  constructor(ownerDocument, name, value) {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.name = String(name);
    this._value = String(value);
    this._changed = false;

    /**
     * @type {HTMLElement?}
     */
    this.ownerElement = null;
  }

  get value() { return this._value; }

  set value(value) {
    const {ownerElement, name, _value} = this;
    this._changed = true;
    this._value = String(value);
    if (ownerElement) {
      ceAttributes(ownerElement, name, _value, this._value);
      moAttributes(ownerElement, name, _value);
    }
  }

  toString() {
    let {name, _value} = this;
    return _value ? `${name}="${escape(_value)}"` : name;
  }
}
