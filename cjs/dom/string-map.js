'use strict';
const uhyphen = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('uhyphen'));
const {setPrototypeOf} = require('../shared/object.js');

const refs = new WeakMap;

const key = name => `data-${uhyphen(name)}`;
const prop = name => name.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());

const handler = {
  get(dataset, name) {
    if (name in dataset)
      return refs.get(dataset).getAttribute(key(name));
  },

  set(dataset, name, value) {
    dataset[name] = value;
    refs.get(dataset).setAttribute(key(name), value);
    return true;
  },

  deleteProperty(dataset, name) {
    if (name in dataset)
      refs.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};

/**
 * @implements globalThis.DOMStringMap
 */
class DOMStringMap {
  /**
   * @param {Element} ref
   */
  constructor(ref) {
    for (const {name, value} of ref.attributes) {
      if (/^data-/.test(name))
        this[prop(name)] = value;
    }
    refs.set(this, ref);
    return new Proxy(this, handler);
  }
}
exports.DOMStringMap = DOMStringMap

setPrototypeOf(DOMStringMap.prototype, null);
