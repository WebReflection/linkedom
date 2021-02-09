// https://dom.spec.whatwg.org/#interface-nodelist

export class NodeList extends Array {
  item(i) { return i < this.length ? this[i] : null; }
}
