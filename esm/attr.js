import {escape} from 'html-escaper';

import {ATTRIBUTE_NODE} from './constants.js';
import {String} from './utils.js';
import {Node} from './node.js';

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
    this._changed = true;
    this._value = String(value);
  }

  toString() {
    let {ownerElement, name, _value} = this;
    if (name === 'style' && ownerElement)
      _value = ownerElement.style.cssText;
    return _value ? `${name}="${escape(_value)}"` : name;
  }
}
