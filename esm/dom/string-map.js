import uhyphen from 'uhyphen';
import {setPrototypeOf} from '../shared/object.js';

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
export class DOMStringMap {
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

setPrototypeOf(DOMStringMap.prototype, null);
