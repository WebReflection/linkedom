'use strict';
// https://dom.spec.whatwg.org/#interface-nodelist

class NodeList extends Array {
  item(i) { return i < this.length ? this[i] : null; }
}
exports.NodeList = NodeList
