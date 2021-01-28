'use strict';
const uhyphen = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('uhyphen'));

const {DOM} = require('./constants.js');

const refs = new WeakMap;

const getKeys = style => [...style.keys()].filter(key => key !== DOM);

const updateKeys = style => {
  const attr = refs.get(style).getAttributeNode('style');
  if (!attr || attr._changed || style.get(DOM) !== attr) {
    style.clear();
    if (attr) {
      style.set(DOM, attr);
      for (const rule of attr._value.split(/\s*;\s*/)) {
        const pair = rule.split(/\s*:\s*/);
        if (1 < pair.length) {
          let [key, value] = pair;
          key = key.trim();
          value = value.trim();
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
        style.set(DOM, attr);
      }
      attr._value = style.toString();
      attr._changed = false;
    }
    return true;
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
class CSSStyleDeclaration extends Map {
  constructor(value) {
    super();
    refs.set(this, value);
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

  [Symbol.iterator]() {
    const keys = getKeys(this[DOM]);
    const {length} = keys;
    let i = 0;
    return {
      next() {
        const done = i === length;
        return {done, value: done ? null : keys[i++]};
      }
    };
  }

  get[DOM]() { return this; }

  toString() {
    const self = this[DOM];
    updateKeys(self);
    const cssText = [];
    self.forEach((value, key) => {
      if (key !== DOM)
        cssText.push(`${key}:${value}`);
    });
    return cssText.join(';');
  }
}
exports.CSSStyleDeclaration = CSSStyleDeclaration

const {prototype} = CSSStyleDeclaration;
