/**
 * @implements globalThis.NamedNodeMap
 */
export class NamedNodeMap extends Array {
  constructor(ownerElement) {
    super();
    this.ownerElement = ownerElement;
  }

  getNamedItem(name) {
    return this.ownerElement.getAttributeNode(name);
  }

  setNamedItem(attr) {
    this.ownerElement.setAttributeNode(attr);
    this.unshift(attr);
  }

  removeNamedItem(name) {
    const item = this.getNamedItem(name);
    this.ownerElement.removeAttribute(name);
    this.splice(this.indexOf(item), 1);
  }

  item(index) {
    return index < this.length ? this[index] : null;
  }

  /* c8 ignore start */
  getNamedItemNS(_, name) {
    return this.getNamedItem(name);
  }

  setNamedItemNS(_, attr) {
    return this.setNamedItem(attr);
  }

  removeNamedItemNS(_, name) {
    return this.removeNamedItem(name);
  }
  /* c8 ignore stop */
}
