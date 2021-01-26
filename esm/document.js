import {DOCUMENT_NODE} from './constants.js';

import {Mime} from './utils.js';

import {NonElementParentNode, ParentNode} from './mixins.js';

import {Attr} from './attribute.js';
import {Comment} from './comment.js';
import {Element} from './element.js';
import {DocumentFragment} from './fragment.js';
import {Node} from './node.js';
import {Text} from './text.js';

/**
 * @implements globalThis.Document
 */
export class Document extends Node {

  /**
   * @param {string} type the document mime-type
   */
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._mime = Mime[type];

    /**
     * @type {HTMLElement?}
     */
    this.root = null;
  }

  // <NonElementParentNode>
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

  prepend(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  append(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

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

  createAttribute(name) {
    return new Attr(this, name, '');
  }

  /**
   * @param {string} localName
   * @param {object?} options
   */
  createElement(localName, options = {}) {
    const element = new Element(this, localName);
    if (options.is)
      element.setAttribute('is', options.is);
    return element;
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

  createDocumentFragment() {
    return new DocumentFragment(this);
  }

  toString() {
    return this._mime.docType + (this.root || '').toString();
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
