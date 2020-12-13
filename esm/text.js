import {Type} from './common.js';
import {Node} from './node.js';

export const TEXT_NODE = Type.Text;

export class Text extends Node {
  /**
   * @param {string} value 
   */
  constructor(value) {
    super(TEXT_NODE, '#text');
    this.value = value;
  }

  toString() {
    return this.value;
  }
};
