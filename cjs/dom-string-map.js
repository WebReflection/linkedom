'use strict';
const uhyphen = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('uhyphen'));

const refs = new WeakMap;

const key = name => `data-${uhyphen(name)}`;

const handler = {
  get(self, name) {
    return refs.get(self).getAttribute(key(name));
  },

  set(self, name, value) {
    refs.get(self).setAttribute(key(name), value);
    self[name] = value;
    return true;
  },

  deleteProperty(self, name) {
    refs.get(self).removeAttribute(key(name));
    return delete self[name];
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

Object.setPrototypeOf(DOMStringMap.prototype, null);
