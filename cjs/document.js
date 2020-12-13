'use strict';
const {Attribute} = require('./attribute.js');
const {Comment} = require('./comment.js');
const {Element, ELEMENT_NODE} = require('./element.js');
const {Fragment} = require('./fragment.js');
const {Node} = require('./node.js');
const {Text} = require('./text.js');
const {Mime, Type, invalidOperation, link} = require('./common.js');

const DOCUMENT_NODE = Type.Document;
exports.DOCUMENT_NODE = DOCUMENT_NODE;

class Document extends Node {
  /**
   * @param {string} kind the kind of document: html, xml, svg
   */
  constructor(mimeType) {
    super(DOCUMENT_NODE, '#document');
    mimeType = mimeType.toLowerCase();
    const {docType, ignoreCase, voidElements} = Mime[mimeType];
    this.docType = docType;
    this.ignoreCase = ignoreCase;
    this.voidElements = voidElements;
    if (mimeType === 'image/svg+xml') {
      this.root = this.createElement('svg');
      this.root.setAttribute('version', '1.1');
      this.root.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
  }

  /**
   * @returns {Element?} the root element or `null` if none is present.
   */
  get root() {
    return this.next;
  }

  /**
   * @param {Element?} root the root element to be set or `null` to clean up.
   */
  set root(root) {
    if (root) {
      if (root.nodeType !== ELEMENT_NODE)
        invalidOperation();
      const {parentNode} = root;
      if (parentNode && parentNode.nodeType === ELEMENT_NODE)
        parentNode.removeChild(root);
      link(this, root);
      root.parentNode = this;
    }
    else {
      const {next} = this;
      if (next) {
        next.prev = null;
        next.parentNode = null;
        this.next = null;
      }
    }
  }

  createAttribute(name) {
    const attribute = new Attribute(name, '');
    attribute.ownerDocument = this;
    return attribute;
  }

  createComment(value) {
    const comment = new Comment(value);
    comment.ownerDocument = this;
    return comment;
  }

  createDocumentFragment() {
    const fragment = new Fragment;
    fragment.ownerDocument = this;
    return fragment;
  }

  createElement(name, options = {}) {
    const element = new Element(name, this.voidElements.test(name));
    element.ownerDocument = this;
    if (options.is)
      element.setAttribute('is', options.is);
    return element;
  }

  createTextNode(value) {
    const text = new Text(value);
    text.ownerDocument = this;
    return text;
  }

  getElementById(id) {
    let {next} = this;
    while (next) {
      if (next.nodeType === ELEMENT_NODE && next.id === id)
        return next;
      next = next.next;
    }
    return null;
  }

  getElementsByClassName(name) {
    const {ignoreCase} = this;
    if (ignoreCase)
      name = name.toLowerCase();
    const out = [];
    let {next} = this;
    while (next) {
      if (
        next.nodeType === ELEMENT_NODE &&
        next.classList.contains(name)
      )
        out.push(next);
      next = next.next;
    }
    return out;
  }

  getElementsByTagName(name) {
    const {ignoreCase} = this;
    if (ignoreCase)
      name = name.toLowerCase();
    const out = [];
    let {next} = this;
    while (next) {
      if (next.nodeType === ELEMENT_NODE) {
        if ((ignoreCase ? next.name.toLowerCase() : next.name) === name)
          out.push(next);
      }
      next = next.next;
    }
    return out;
  }

  // TODO: make XML possible if doctype is not html
  toString() {
    return `${this.docType}${this.next || ''}`;
  }
}
exports.Document = Document;
