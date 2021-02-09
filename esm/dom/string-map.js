import uhyphen from 'uhyphen';
import {setPrototypeOf} from '../shared/object.js';

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
export class DOMStringMap {
  /**
   * @param {Element} value
   */
  constructor(value) {
    refs.set(this, value);
    return new Proxy(this, handler);
  }
}

setPrototypeOf(DOMStringMap.prototype, null);
