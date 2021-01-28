import {escape} from 'html-escaper';

import {ATTRIBUTE_NODE} from './constants.js';
import {String, attributeChangedCallback} from './utils.js';
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
    const {ownerElement, name, _value} = this;
    this._changed = true;
    attributeChangedCallback(
      ownerElement, name, _value, this._value = String(value)
    );
  }

  toString() {
    let {name, _value} = this;
    return _value ? `${name}="${escape(_value)}"` : name;
  }
}
