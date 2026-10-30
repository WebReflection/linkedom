'use strict';
const {CSSStyleDeclaration: BaseCSSStyleDeclaration} = require('cssomnom/parse');
const {CHANGED, VALUE} = require('../shared/symbols.js');

const refs = new WeakMap;

const sync = decl => {
  const data = refs.get(decl);
  if (!data) return;
  const {element} = data;
  const attr = element.getAttributeNode('style');
  if (attr !== data.attr || (attr && attr[CHANGED])) {
    data.attr = attr;
    const {onChange} = decl;
    decl.onChange = null;
    decl.cssText = attr ? attr[VALUE] : '';
    decl.onChange = onChange;
    if (attr) attr[CHANGED] = false;
  }
};

const handler = {
  get(target, prop, receiver) {
    sync(target);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    sync(target);
    return Reflect.set(target, prop, value, receiver);
  },

  has(target, prop) {
    sync(target);
    return Reflect.has(target, prop);
  },

  ownKeys(target) {
    sync(target);
    return Reflect.ownKeys(target);
  },

  getOwnPropertyDescriptor(target, prop) {
    sync(target);
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
};

/**
 * @implements globalThis.CSSStyleDeclaration
 */
class CSSStyleDeclaration extends BaseCSSStyleDeclaration {
  /**
   * @param {Element} [element]
   */
  constructor(element) {
    const decl = super();
    if (!element) return decl;

    const attr = element.getAttributeNode('style');
    if (attr && attr[VALUE]) {
      decl.cssText = attr[VALUE];
    }

    const data = {element, attr};
    refs.set(decl, data);

    decl.onChange = () => {
      let attr = element.getAttributeNode('style');
      const cssText = decl.cssText;
      if (!attr) {
        if (cssText) {
          attr = element.ownerDocument.createAttribute('style');
          attr[VALUE] = cssText;
          element.setAttributeNode(attr);
          data.attr = attr;
          attr[CHANGED] = false;
        }
      } else {
        data.attr = attr;
        if (attr[VALUE] !== cssText) {
          attr.value = cssText;
          attr[CHANGED] = false;
        }
      }
    };

    const proxy = new Proxy(decl, handler);
    refs.set(proxy, data);
    return proxy;
  }

  toString() {
    sync(this);
    return this.cssText;
  }
}
exports.CSSStyleDeclaration = CSSStyleDeclaration
