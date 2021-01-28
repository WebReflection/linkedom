import {DOCUMENT_NODE, DOM} from './constants.js';

import {Mime} from './utils.js';

// mixins & interfaces
import {NonElementParentNode, ParentNode} from './mixins.js';
import {Event, CustomEvent} from './interfaces.js';

// nodes
import {Attr} from './attr.js';
import {Comment} from './comment.js';
import {Element} from './element.js';
import {DocumentFragment} from './fragment.js';
import {Node} from './node.js';
import {Text} from './text.js';

// node extends
import {SVGElement} from './svg-element.js';
import {HTMLElement} from './html-element.js';
import {HTMLTemplateElement} from './html-template-element.js';

// extras
import {Range} from './range.js';
import {TreeWalker} from './tree-walker.js';

const {create, defineProperties} = Object;

const defaultView = new Proxy(globalThis, {
  /* c8 ignore start */
  get(globalThis, name) {
    switch (name) {
      case 'Event':
        return Event;
      case 'CustomEvent':
        return CustomEvent;
      default:
        return globalThis[name];
    }
  }
  /* c8 ignore stop */
});

/**
 * @implements globalThis.Document
 */
export class Document extends Node {

  get [DOM]() {
    return {
      SVGElement,
      HTMLElement,
      HTMLTemplateElement
    };
  }

  /**
   * @param {string} type the document mime-type
   */
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._mime = Mime[type];

    /**
     * @type {Element?}
     */
    this.root = null;
  }

  get defaultView() { return defaultView; }

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
  createElement(localName, options = {}) {
    let element;
    if (this._mime.ignoreCase) {
      switch (localName) {
        case 'template':
        case 'TEMPLATE':
          element = new HTMLTemplateElement(this);
          break;
        default:
          element = new HTMLElement(localName, this);
          break;
      }
      if (options.is)
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
}
