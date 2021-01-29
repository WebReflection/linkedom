'use strict';
const {DOCUMENT_NODE, DOM} = require('./constants.js');

const {Mime} = require('./utils.js');

// mixins & interfaces
const {NonElementParentNode, ParentNode} = require('./mixins.js');
const {Event, CustomEvent} = require('./interfaces.js');

// nodes
const {Attr} = require('./attr.js');
const {Comment} = require('./comment.js');
const {Element} = require('./element.js');
const {DocumentFragment} = require('./document-fragment.js');
const {Node} = require('./node.js');
const {Text} = require('./text.js');

// node extends
const {SVGElement} = require('./svg-element.js');
const {HTMLElement} = require('./html-element.js');
const {HTMLTemplateElement} = require('./html-template-element.js');

// extras
const {Range} = require('./range.js');
const {TreeWalker} = require('./tree-walker.js');
const {CustomElementRegistry} = require('./custom-element-registry.js');

const {create, defineProperties} = Object;

const defaultViewExports = {
  Event, CustomEvent,
  HTMLElement,
  HTMLTemplateElement
};

/**
 * @implements globalThis.Document
 */
class Document extends Node {

  /**
   * @param {string} type the document mime-type
   */
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._mime = Mime[type];
    this._customElements = {_active: false};

    /**
     * @type {Element?}
     */
    this.root = null;
  }

  get [DOM]() {
    return {
      SVGElement,
      HTMLElement
    };
  }

  get defaultView() {
    if (!this._customElements.define)
      this._customElements = new CustomElementRegistry(this);
    return new Proxy(globalThis, {
      /* c8 ignore start */
      get: (globalThis, name) => {
        switch (name) {
          case 'customElements':
            return this._customElements;
          default:
            return defaultViewExports[name] || globalThis[name];
        }
      }
      /* c8 ignore stop */
    });
  }

  // <NonElementParentNode>
  /**
   * @param {string} id
   * @returns {Element?}
   */
  getElementById(id) {
    const {root} = this;
    return root && NonElementParentNode.getElementById(root, id);
  }
  // </NonElementParentNode>

  // <ParentNode>
  get children() {
    const {root} = this;
    return root ? [root] : [];
  }

  /**
   * @type {Element?}
   */
  get firstElementChild() {
    return this.root;
  }

  /**
   * @type {Element?}
   */
  get lastElementChild() {
    return this.root;
  }

  get childElementCount() {
    return this.root ? 1 : 0;
  }

  /**
   * This throws on Document instances.
   */
  prepend(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * This throws on Document instances.
   */
  append(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * This throws on Document instances.
   */
  replaceChildren(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * @param {string} selectors
   * @returns {Element?}
   */
  querySelector(selectors) {
    const {root} = this;
    return root && ParentNode.querySelector({_next: root}, selectors);
  }

  /**
   * @param {string} selectors
   * @returns {NodeList}
   */
  querySelectorAll(selectors) {
    const {root} = this;
    return root ? ParentNode.querySelectorAll({_next: root}, selectors) : [];
  }
  // </ParentNode>

  /**
   * @param {string} name
   * @returns {Attr}
   */
  createAttribute(name) {
    return new Attr(this, name, '');
  }

  /**
   * @param {string} localName
   * @param {object?} options
   */
  createElement(localName, options) {
    let element;
    if (this._mime.ignoreCase) {
      const builtin = !!(options && options.is);
      switch (localName) {
        case 'template':
        case 'TEMPLATE':
          if (!builtin) {
            element = new HTMLTemplateElement(this);
            break;
          }
        default:
          const {_customElements} = this;
          if (_customElements._active) {
            const ce = builtin ? options.is : localName;
            if (_customElements._registry.has(ce)) {
              const {Class} = _customElements._registry.get(ce);
              element = new Class(this, localName);
              element._custom = true;
              break;
            }
          }
          element = new HTMLElement(this, localName);
          break;
      }
      if (builtin)
        element.setAttribute('is', options.is);
    }
    else
      element = new Element(this, localName);
    return element;
  }

  /**
   * @deprecated
   * @param {"Event"|"CustomEvent"} name
   * @returns {Event|CustomEvent}
   */
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

  /**
   * @param {string} textContent
   */
  createComment(textContent) {
    return new Comment(this, textContent);
  }

  /**
   * @param {string} textContent 
   */
  createTextNode(textContent) {
    return new Text(this, textContent);
  }

  /**
   * @param {Element} root 
   * @param {number?} whatToShow 
   */
  createTreeWalker(root, whatToShow) {
    return new TreeWalker(root, whatToShow);
  }

  createDocumentFragment() {
    return new DocumentFragment(this);
  }

  createRange() {
    return new Range;
  }

  toString() {
    return this._mime.docType + (this.root || '').toString();
  }

  /**
   * @param {Node} node 
   * @param {boolean?} deep 
   */
  importNode(node, deep = false) {
    return node.cloneNode(deep);
  }

  /**
   * @param {string} name
   * @returns {NodeList}
   */
  getElementsByTagName(name) {
    const {root} = this;
    return root ? root.getElementsByTagName(name) : [];
  }

  /**
   * @deprecated
   * @param {string} _
   * @param {string} name
   * @returns {NodeList}
   */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }

  /**
   * @param {string} className
   * @returns {NodeList}
   */
  getElementsByClassName(className) {
    const {root} = this;
    return root ? root.getElementsByClassName(className) : [];
  }

  /* c8 ignore start */
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }

  createElementNS(_, localName, options) {
    return this.createElement(localName, options);
  }
  /* c8 ignore stop */
}
exports.Document = Document
