'use strict';
const uhyphen = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('uhyphen'));
const {setPrototypeOf} = require('../shared/object.js');

const refs = new WeakMap;

const key = name => `data-${uhyphen(name)}`;

const handler = {
  get(dataset, name) {
    return refs.get(dataset).getAttribute(key(name));
  },

  set(dataset, name, value) {
    refs.get(dataset).setAttribute(key(name), value);
    dataset[name] = value;
    return true;
  },

  deleteProperty(dataset, name) {
    refs.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};

/**
 * @implements globalThis.DOMStringMap
 */
class DOMStringMap {
  /**
   * @param {Element} value
   */
  constructor(value) {
    refs.set(this, value);
    return new Proxy(this, handler);
  }
}
exports.DOMStringMap = DOMStringMap

setPrototypeOf(DOMStringMap.prototype, null);
