import {Type} from './common.js';
import {Node} from './node.js';

export const ATTRIBUTE_NODE = Type.Attribute;

export class Attribute extends Node {
  /**
   * @param {string} localName the attribute localName
   * @param {string} value the attribute value
   */
  constructor(localName, value) {
    super(ATTRIBUTE_NODE, localName);
    this.value = value;
  }

  toString() {
    const {name, value} = this;
    return value ? `${name}="${value}"` : name;
  }
};
