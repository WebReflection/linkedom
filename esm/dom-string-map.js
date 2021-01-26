import uhyphen from 'uhyphen';

const {defineProperty} = Object;

const key = name => `data-${uhyphen(name)}`;

const handler = {
  ownKeys({_: element}) {
    const keys = [];
    for (const {name} of element.attributes) {
      if (/^data-/.test(name))
        keys.push(name);
    }
    return keys;
  },

  has({_: element}, name) {
    return element.hasAttribute(key(name));
  },

  deleteProperty({_: element}, name) {
    element.removeAttribute(key(name));
    return true;
  },

  get({_: element}, name) {
    return element.getAttribute(key(name));
  },

  set({_: element}, name, value) {
    element.setAttribute(key(name), value);
    return true;
  }
};

export function DOMStringMap(value) {'use strict';
  return new Proxy(
    defineProperty(this, '_', {value}),
    handler
  );
}
