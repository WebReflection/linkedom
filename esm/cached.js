const {getPrototypeOf, setPrototypeOf} = Reflect;

import {Node} from './node.js';

const SuperNode = getPrototypeOf(Node);

class DirtyNode extends SuperNode {
  constructor() {
    super();
    this._dirty = true;
  }
}

setPrototypeOf(Node, DirtyNode);
setPrototypeOf(Node.prototype, DirtyNode.prototype);

export * from './index.js';
