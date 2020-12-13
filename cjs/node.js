'use strict';
require('./common.js');

class Node {
  /**
   * @param {number} nodeType the Node type
   * @param {string} name the Node name
   */
  constructor(nodeType, name) {
    this.nodeType = nodeType;
    this.name = name;
    this.next = null;
    this.prev = null;
    this.parentNode = null;
    this.ownerDocument = null;
  }
}
exports.Node = Node;
