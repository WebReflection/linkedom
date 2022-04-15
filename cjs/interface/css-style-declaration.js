'use strict';
const uhyphen = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('uhyphen'));

const {CHANGED, PRIVATE, VALUE} = require('../shared/symbols.js');

const refs = new WeakMap;

const getKeys = style => [...style.keys()].filter(key => key !== PRIVATE);

const updateKeys = style => {
  const attr = refs.get(style).getAttributeNode('style');
  if (!attr || attr[CHANGED] || style.get(PRIVATE) !== attr) {
    style.clear();
    if (attr) {
      style.set(PRIVATE, attr);
      for (const rule of attr[VALUE].split(/\s*;\s*/)) {
        let [key, ...rest] = rule.split(':');
        if (rest.length > 0) {
          key = key.trim();
          const value = rest.join(':').trim();
          if (key && value)
            style.set(key, value);
        }
      }
    }
  }
  return attr;
};

const handler = {
  get(style, name) {
    if (name in prototype)
      return style[name];
    updateKeys(style);
    if (name === 'length')
      return getKeys(style).length;
    if (/^\d+$/.test(name))
      return getKeys(style)[name];
    return style.get(uhyphen(name));
  },

  set(style, name, value) {
    if (name === 'cssText')
      style[name] = value;
    else {
      let attr = updateKeys(style);
      if (value == null)
        style.delete(uhyphen(name));
      else
        style.set(uhyphen(name), value);
      if (!attr) {
        const element = refs.get(style);
        attr = element.ownerDocument.createAttribute('style');
        element.setAttributeNode(attr);
        style.set(PRIVATE, attr);
      }
      attr[CHANGED] = false;
      attr[VALUE] = style.toString();
    }
    return true;
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
class CSSStyleDeclaration extends Map {
  constructor(element) {
    super();
    refs.set(this, element);
    /* c8 ignore start */
    return new Proxy(this, handler);
    /* c8 ignore stop */
  }

  get cssText() {
    return this.toString();
  }

  set cssText(value) {
    refs.get(this).setAttribute('style', value);
  }

  getPropertyValue(name) {
    const self = this[PRIVATE];
    return handler.get(self, name);
  }

  setProperty(name, value) {
    const self = this[PRIVATE];
    handler.set(self, name, value);
  }

  removeProperty(name) {
    const self = this[PRIVATE];
    handler.set(self, name, null);
  }

  [Symbol.iterator]() {
    const keys = getKeys(this[PRIVATE]);
    const {length} = keys;
    let i = 0;
    return {
      next() {
        const done = i === length;
        return {done, value: done ? null : keys[i++]};
      }
    };
  }

  get[PRIVATE]() { return this; }

  toString() {
    const self = this[PRIVATE];
    updateKeys(self);
    const cssText = [];
    self.forEach(push, cssText);
    return cssText.join(';');
  }
}
exports.CSSStyleDeclaration = CSSStyleDeclaration

const {prototype} = CSSStyleDeclaration;

function push(value, key) {
  if (key !== PRIVATE)
    this.push(`${key}:${value}`);
}
