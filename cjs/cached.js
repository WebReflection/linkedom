'use strict';
const {getPrototypeOf, setPrototypeOf} = Reflect;

const {Node} = require('./node.js');

const SuperNode = getPrototypeOf(Node);

class DirtyNode extends SuperNode {
  constructor() {
    super();
    this._dirty = true;
  }
}

setPrototypeOf(Node, DirtyNode);
setPrototypeOf(Node.prototype, DirtyNode.prototype);

(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./index.js'));
