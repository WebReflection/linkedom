import uhyphen from 'uhyphen';

import {DOM} from './constants.js';

const refs = new WeakMap;

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
    else
      style.delete(DOM);
  }
  return attr;
};

const handler = {
  get(style, name) {
    if (name in prototype)
      return style[name];
    updateKeys(style);
    return style.get(uhyphen(name));
  },

  set(style, name, value) {
    if (name === 'cssText')
      style[name] = value;
    else {
      const attr = updateKeys(style);
      if (value == null)
        style.delete(uhyphen(name));
      else
        style.set(uhyphen(name), value);
      if (attr) {
        attr._value = style.toString();
        attr._changed = false;
      }
      else
        style.cssText = style.toString();
    }
    return true;
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
export class CSSStyleDeclaration extends Map {
  constructor(value) {
    super();
    refs.set(this, value);
    /* c8 ignore start */
    return new Proxy(this, handler);
    /* c8 ignore stop */
  }

  get cssText() {
    updateKeys(this);
    return this.toString();
  }

  set cssText(value) {
    refs.get(this).setAttribute('style', value);
  }

  toString() {
    const cssText = [];
    this.forEach((value, key) => {
      if (key !== DOM)
        cssText.push(`${key}:${value}`);
    });
    return cssText.join(';');
  }
}

const {prototype} = CSSStyleDeclaration;
