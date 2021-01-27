import {escape} from 'html-escaper';

import {ATTRIBUTE_NODE} from './constants.js';
import {String} from './utils.js';
import {NodeLess} from './node.js';

/**
 * @implements globalThis.Attr
 */
export class Attr extends NodeLess {

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
