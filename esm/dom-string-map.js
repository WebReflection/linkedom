import uhyphen from 'uhyphen';

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
export class DOMStringMap {
  /**
   * @param {Element} value
   */
  constructor(value) {
    refs.set(this, value);
    return new Proxy(this, handler);
  }
}

Object.setPrototypeOf(DOMStringMap.prototype, null);
