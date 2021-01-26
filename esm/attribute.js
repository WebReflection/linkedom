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
    this.value = String(value);

    /**
     * @type {HTMLElement?}
     */
    this.ownerElement = null;
  }

  toString() {
    return `${this.name}="${escape(this.value)}"`;
  }
}
