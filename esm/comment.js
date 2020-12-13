import {Type} from './common.js';
import {Node} from './node.js';

export const COMMENT_NODE = Type.Comment;

export class Comment extends Node {
  /**
   * @param {string} value 
   */
  constructor(value) {
    super(COMMENT_NODE, '#comment');
    this.value = value;
  }

  toString() {
    return `<!--${this.value}-->`;
  }
};
