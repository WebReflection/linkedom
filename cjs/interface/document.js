'use strict';
const {DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE, DOCUMENT_TYPE_NODE, ELEMENT_NODE, SVG_NAMESPACE} = require('../shared/constants.js');

const {
  CUSTOM_ELEMENTS, DOM_PARSER, IMAGE, MUTATION_OBSERVER, DOCTYPE, END, NEXT, MIME
} = require('../shared/symbols.js');

const {Facades, illegalConstructor} = require('../shared/facades.js');
const {HTMLClasses} = require('../shared/html-classes.js');
const {Mime} = require('../shared/mime.js');
const {knownSiblings} = require('../shared/utils.js');
const {assign, create, defineProperties, setPrototypeOf} = require('../shared/object.js');

const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');

const {SVGElement} = require('../svg/element.js');

const {Attr} = require('./attr.js');
const {Comment} = require('./comment.js');
const {CustomElementRegistry} = require('./custom-element-registry.js');
const {CustomEvent} = require('./custom-event.js');
const {DocumentFragment} = require('./document-fragment.js');
const {DocumentType} = require('./document-type.js');
const {Element} = require('./element.js');
const {Event} = require('./event.js');
const {EventTarget} = require('./event-target.js');
const {InputEvent} = require('./input-event.js');
const {ImageClass} = require('./image.js');
const {MutationObserverClass} = require('./mutation-observer.js');
const {NodeList} = require('./node-list.js');
const {Range} = require('./range.js');
const {Text} = require('./text.js');
const {TreeWalker} = require('./tree-walker.js');

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
    InputEvent,
    NodeList
  }
);

/**
 * @implements globalThis.Document
 */
class Document extends NonElementParentNode {
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this[CUSTOM_ELEMENTS] = {active: false, registry: null};
    this[MUTATION_OBSERVER] = {active: false, class: null};
    this[MIME] = Mime[type];
    /** @type {DocumentType} */
    this[DOCTYPE] = null;
    this[DOM_PARSER] = null;
    this[IMAGE] = null;
  }

  /**
   * @type {globalThis.Document['defaultView']}
   */
  get defaultView() {
    const window = new Proxy(globalThis, {
      get: (globalThis, name) => {
        switch (name) {
          case 'document':
            return this;
          /* c8 ignore start */
          case 'navigator':
            return {
              userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
            };
          /* c8 ignore stop */
          case 'window':
            return window;
          case 'customElements':
            if (!this[CUSTOM_ELEMENTS].registry)
              this[CUSTOM_ELEMENTS] = new CustomElementRegistry(this);
            return this[CUSTOM_ELEMENTS];
          case 'DOMParser':
            return this[DOM_PARSER];
          case 'Image':
            if (!this[IMAGE])
              this[IMAGE] = ImageClass(this);
            return this[IMAGE];
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
    knownSiblings(this, this[DOCTYPE], this[NEXT]);
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

  importNode(externalNode) {
    // important: keep the signature length as *one*
    // or it would behave like old IE or Edge with polyfills
    const deep = 1 < arguments.length && !!arguments[1];
    const node = externalNode.cloneNode(deep);
    const {[CUSTOM_ELEMENTS]: customElements} = this;
    const {active} = customElements;
    const upgrade = element => {
      const {ownerDocument, nodeType} = element;
      element.ownerDocument = this;
      if (active && ownerDocument !== this && nodeType === ELEMENT_NODE)
        customElements.upgrade(element);
    };
    upgrade(node);
    if (deep) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE: {
          let {[NEXT]: next, [END]: end} = node;
          while (next !== end) {
            if (next.nodeType === ELEMENT_NODE)
              upgrade(next);
            next = next[NEXT];
          }
          break;
        }
      }
    }
    return node;
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
    return nsp === SVG_NAMESPACE ?
            new SVGElement(this, localName, null) :
            this.createElement(localName, options);
  }
  /* c8 ignore stop */
}
exports.Document = Document

setPrototypeOf(
  globalExports.Document = function Document() {
    illegalConstructor();
  },
  Document
).prototype = Document.prototype;
