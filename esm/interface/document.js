import {DOCUMENT_NODE, DOCUMENT_TYPE_NODE} from '../shared/constants.js';

import {
  CUSTOM_ELEMENTS, DOM_PARSER, MUTATION_OBSERVER,
  DOCTYPE, END, NEXT, MIME, PRIVATE
} from '../shared/symbols.js';

import {Facades, illegalConstructor} from '../shared/facades.js';
import {HTMLClasses} from '../shared/html-classes.js';
import {Mime} from '../shared/mime.js';
import {knownBoundaries} from '../shared/utils.js';
import {assign, create, defineProperties, setPrototypeOf} from '../shared/object.js';

import {NonElementParentNode} from '../mixin/non-element-parent-node.js';

import {SVGElement} from '../svg/element.js';

import {Attr} from './attr.js';
import {Comment} from './comment.js';
import {CustomElementRegistry} from './custom-element-registry.js';
import {CustomEvent} from './custom-event.js';
import {DocumentFragment} from './document-fragment.js';
import {DocumentType} from './document-type.js';
import {Element} from './element.js';
import {Event} from './event.js';
import {EventTarget} from './event-target.js';
import {MutationObserverClass} from './mutation-observer.js';
import {NodeList} from './node-list.js';
import {Range} from './range.js';
import {Text} from './text.js';
import {TreeWalker} from './tree-walker.js';

const query = (method, ownerDocument, selectors) => {
  let {[NEXT]: next, [END]: end} = ownerDocument;
  return method.call({ownerDocument, [NEXT]: next, [END]: end}, selectors);
};

const globalExports = assign(
  {},
  Facades,
  HTMLClasses,
  {
    CustomEvent,
    Event,
    EventTarget,
    NodeList
  }
);

export class Document extends NonElementParentNode {
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this[CUSTOM_ELEMENTS] = {active: false, registry: null};
    this[MUTATION_OBSERVER] = {active: false, class: null};
    this[MIME] = Mime[type];
    this[DOCTYPE] = null;
    this[DOM_PARSER] = null;
  }

  get [PRIVATE]() {
    return {SVGElement};
  }

  get defaultView() {
    const window = new Proxy(globalThis, {
      get: (globalThis, name) => {
        switch (name) {
          case 'document':
            return this;
          case 'window':
            return window;
          case 'customElements':
            if (!this[CUSTOM_ELEMENTS].registry)
              this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
            return this[CUSTOM_ELEMENTS];
          case 'DOMParser':
            return this[DOM_PARSER];
          case 'MutationObserver':
            if (!this[MUTATION_OBSERVER].class)
              this[MUTATION_OBSERVER] = new MutationObserverClass(this);
            return this[MUTATION_OBSERVER].class;
        }
        return globalExports[name] || globalThis[name];
      }
    });
    return window;
  }

  get doctype() {
    const docType = this[DOCTYPE];
    if (docType)
      return docType;
    const {firstChild} = this;
    if (firstChild && firstChild.nodeType === DOCUMENT_TYPE_NODE)
      return (this[DOCTYPE] = firstChild);
    return null;
  }

  set doctype(name) {
    this[DOCTYPE] = new DocumentType(this, name);
    knownBoundaries(this, this[DOCTYPE], this[NEXT]);
  }

  get documentElement() {
    return this.firstElementChild;
  }

  get isConnected() { return true; }

  createAttribute(name) { return new Attr(this, name); }
  createComment(textContent) { return new Comment(this, textContent); }
  createDocumentFragment() { return new DocumentFragment(this); }
  createElement(localName) { return new Element(this, localName); }
  createRange() { return new Range; }
  createTextNode(textContent) { return new Text(this, textContent); }
  createTreeWalker(root, whatToShow) { return new TreeWalker(root, whatToShow); }

  createEvent(name) {
    const event = create(name === 'Event' ? new Event('') : new CustomEvent(''));
    event.initEvent = event.initCustomEvent = (
      type,
      canBubble = false,
      cancelable = false,
      detail
    ) => {
      defineProperties(event, {
        type: {value: type},
        canBubble: {value: canBubble},
        cancelable: {value: cancelable},
        detail: {value: detail}
      });
    };
    return event;
  }

  cloneNode(deep = false) {
    const {
      constructor,
      [CUSTOM_ELEMENTS]: customElements,
      [DOCTYPE]: doctype
    } = this;
    const document = new constructor();
    document[CUSTOM_ELEMENTS] = customElements;
    if (deep) {
      const end = document[END];
      const {childNodes} = this;
      for (let {length} = childNodes, i = 0; i < length; i++)
        document.insertBefore(childNodes[i].cloneNode(true), end);
      if (doctype)
        document[DOCTYPE] = childNodes[0];
    }
    return document;
  }

  importNode(node, deep = false) {
    return node.cloneNode(deep);
  }

  toString() { return this.childNodes.join(''); }

  querySelector(selectors) {
    return query(super.querySelector, this, selectors);
  }

  querySelectorAll(selectors) {
    return query(super.querySelectorAll, this, selectors);
  }

  /* c8 ignore start */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }
  createElementNS(nsp, localName, options) {
    return nsp === 'http://www.w3.org/2000/svg' ?
            new SVGElement(this, localName, null) :
            this.createElement(localName, options);
  }
  /* c8 ignore stop */
}

setPrototypeOf(
  globalExports.Document = function Document() {
    illegalConstructor();
  },
  Document
).prototype = Document.prototype;
