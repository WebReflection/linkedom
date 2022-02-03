import {ELEMENT_NODE} from '../shared/constants.js';
import {CUSTOM_ELEMENTS, END, NEXT} from '../shared/symbols.js';
import {htmlClasses} from '../shared/register-html-class.js';

import {Document} from '../interface/document.js';
import {NodeList} from '../interface/node-list.js';
import {customElements} from '../interface/custom-element-registry.js';

import {WINDOW} from '../shared/symbols.js';
import {HTMLElement} from './element.js';

const createHTMLElement = (ownerDocument, builtin, localName, options) => {
  if (!builtin && htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  const {[CUSTOM_ELEMENTS]: {active, registry}} = ownerDocument;
  if (active) {
    const ce = builtin ? options.is : localName;
    if (registry.has(ce)) {
      const {Class} = registry.get(ce);
      const element = new Class(ownerDocument, localName);
      customElements.set(element, {connected: false});
      return element;
    }
  }
  return new HTMLElement(ownerDocument, localName);
};

/**
 * @implements globalThis.HTMLDocument
 */
class _HTMLDocument extends Document {
  constructor() { super('text/html'); }

  get all() {
    const nodeList = new NodeList;
    let {[NEXT]: next, [END]: end} = this;
    while (next !== end) {
      switch (next.nodeType) {
        case ELEMENT_NODE:
          nodeList.push(next);
          break;
      }
      next = next[NEXT];
    }
    return nodeList;
  }

  /**
   * @type HTMLHeadElement
   */
  get head() {
    const {documentElement} = this;
    let {firstElementChild} = documentElement;
    if (!firstElementChild) {
      firstElementChild = this.createElement('head');
      documentElement.prepend(firstElementChild);
    }
    return firstElementChild;
  }

  /**
   * @type HTMLBodyElement
   */
  get body() {
    const {head} = this;
    let {nextElementSibling} = head;
    if (!nextElementSibling) {
      nextElementSibling = this.createElement('body');
      head.after(nextElementSibling);
    }
    return nextElementSibling;
  }

  /**
   * @type HTMLTitleElement
   */
  get title() {
    const {head} = this;
    let title = head.getElementsByTagName('title').shift();
    return title ? title.textContent : '';
  }

  set title(textContent) {
    const {head} = this;
    let title = head.getElementsByTagName('title').shift();
    if (title)
      title.textContent = textContent;
    else {
      head.insertBefore(
        this.createElement('title'),
        head.firstChild
      ).textContent = textContent;
    }
  }

  createElement(localName, options) {
    const builtin = !!(options && options.is);
    const element = createHTMLElement(this, builtin, localName, options);
    if (builtin)
      element.setAttribute('is', options.is);
    return element;
  }
}

/** @typedef {{ [WINDOW] : Object }} Context */
/**
 * @constructor
 * @param {Context} context
 */
export class HTMLDocument extends _HTMLDocument {

  constructor (context = {}) {
    super();
    const useState = (target, name) => {
      return ((_0, _1={}) => {
        const g = (name in _1) ? _1 : _0;
        return {
          get: () => g[name],
          set: (v) => (g[name] = v) || true,
        }
      })(target, context[WINDOW]);
    };
    this[WINDOW] = {
      set: (target, name, value) => {
        return useState(target, name).set(value);
      },
      get: (target, name) => {
        if (name === 'window') {
          return new Proxy(target.window, this[WINDOW]);
        }
        return useState(target, name).get();
      }
    }
  }

  get defaultView() {
    return new Proxy(super.defaultView, this[WINDOW])
  }

  get location() {
    return this.defaultView.location;
  }

  set location(location) {
    this.defaultView.location = location;
  }

  get all() { return super.all } 
  get head() { return super.head } 
  get body() { return super.body } 
  get title() { return super.title } 
  set title(v) { super.title = v } 
}
