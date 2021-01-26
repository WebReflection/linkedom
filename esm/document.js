import {DOCUMENT_NODE} from './constants.js';

import {Mime} from './utils.js';

import {NonElementParentNode, ParentNode} from './mixins.js';

import {Attribute} from './attribute.js';
import {Comment} from './comment.js';
import {Element} from './element.js';
import {Fragment} from './fragment.js';
import {Node} from './node.js';
import {Text} from './text.js';

export class Document extends Node {

  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._mime = Mime[type];
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

  get firstElementChild() {
    return this.root;
  }

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

  querySelector(selectors) {
    const {root} = this;
    return root && ParentNode.querySelector({_next: root}, selectors);
  }

  querySelectorAll(selectors) {
    const {root} = this;
    return root ? ParentNode.querySelectorAll({_next: root}, selectors) : [];
  }
  // </ParentNode>

  createAttribute(name) {
    return new Attribute(this, name, '');
  }

  createElement(localName, options = {}) {
    const element = new Element(this, localName);
    if (options.is)
      element.setAttribute('is', options.is);
    return element;
  }

  createComment(textContent) {
    return new Comment(this, textContent);
  }

  createTextNode(textContent) {
    return new Text(this, textContent);
  }

  createDocumentFragment() {
    return new Fragment(this);
  }

  toString() {
    return this._mime.docType + (this.root || '').toString();
  }

  getElementsByTagName(name) {
    const {root} = this;
    return root ? root.getElementsByTagName(name) : [];
  }

  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }

  getElementsByClassName(className) {
    const {root} = this;
    return root ? root.getElementsByClassName(className) : [];
  }
}
