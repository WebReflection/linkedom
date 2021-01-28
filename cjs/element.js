'use strict';
const {ELEMENT_NODE, ELEMENT_NODE_END, ATTRIBUTE_NODE, TEXT_NODE, COMMENT_NODE} = require('./constants.js');
const {String, getNext, getPrev, ignoreCase, isVoidElement, localCase, parseFromString} = require('./utils.js');

const {NodeList} = require('./interfaces.js');
const {NonDocumentTypeChildNode, ParentNode} = require('./mixins.js');

const {NodeElement, NodeElementEnd} = require('./node.js');

const {DOMStringMap} = require('./dom-string-map.js');
const {DOMTokenList} = require('./dom-token-list.js');
const {CSSStyleDeclaration} = require('./css-style-declaration.js');

const matches = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('./matches.js'));

const attributesHandler = {
  get(target, key) {
    return key in target ? target[key] : target.find(({name}) => name === key);
  }
};

/**
 * @implements globalThis.Element
 */
class Element extends NodeElement {

  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, ELEMENT_NODE);
    this._classList = null;
    this._dataset = null;
    this._style = null;
    this._next = this._end = new NodeElementEnd(this);
  }

  get id() {
    return this.getAttribute('id') || '';
  }

  set id(value) {
    if (value == null)
      this.removeAttribute('id');
    else
      this.setAttribute('id', value);
  }

  get className() {
    return this.classList.value;
  }

  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }

  /**
   * @type {string}
   */
  get nodeName() {
    return localCase(this);
  }

  /**
   * @type {string}
   */
  get tagName() {
    return localCase(this);
  }

  /**
   * @type {DOMTokenList}
   */
  get classList() {
    return this._classList || (this._classList = new DOMTokenList(this));
  }

  /**
   * @type {DOMStringMap}
   */
  get dataset() {
    return this._dataset || (this._dataset = new DOMStringMap(this));
  }

  /**
   * @type {CSSStyleDeclaration}
   */
  get style() {
    return this._style || (this._style = new CSSStyleDeclaration(this));
  }

  get innerText() { return this.textContent; }

  /**
   * @type {string}
   */
  get textContent() {
    const text = [];
    let {_next, _end} = this;
    while (_next !== _end) {
      if (_next.nodeType === TEXT_NODE)
        text.push(_next.textContent);
      _next = _next._next;
    }
    return text.join('');
  }

  set textContent(text) {
    this.replaceChildren();
    if (text)
      this.appendChild(this.ownerDocument.createTextNode(text));
  }

  get innerHTML() {
    return this.childNodes.join('');
  }

  set innerHTML(html) {
    const {constructor} = this.ownerDocument;
    const document = parseFromString(new constructor, ignoreCase(this), html);
    this.replaceChildren(...document.documentElement.childNodes);
  }

  get outerHTML() {
    return this.toString();
  }

  set outerHTML(html) {
    const template = this.ownerDocument.createElement('<>');
    template.innerHTML = html;
    this.parentNode.replaceChild(template.firstElementChild, this);
  }

  /**
   * @type {Attr[]}
   */
  get attributes() {
    const attributes = [];
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(_next);
      _next = _next._next;
    }
    return new Proxy(attributes, attributesHandler);
  }

  /**
   * @type {Node?}
   */
  get nextSibling() {
    return getNext(this._end);
  }

  /**
   * @type {Node?}
   */
  get previousSibling() {
    return getPrev(this);
  }

  /**
   * @type {Element?}
   */
  get nextElementSibling() {
    return NonDocumentTypeChildNode.nextElementSibling(this._end);
  }

  /**
   * @type {Element?}
   */
  get previousElementSibling() {
    return NonDocumentTypeChildNode.previousElementSibling(this);
  }

  closest(selectors) {
    let parentElement = this;
    while (parentElement && !parentElement.matches(selectors))
      parentElement = parentElement.parentElement;
    return parentElement;
  }

  /**
   * @param {string} name
   * @returns {Attr?}
   */
  getAttributeNode(name) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next.name === name)
        return _next;
      _next = _next._next;
    }
    return null;
  }

  /**
   * @param {Attr} attribute
   */
  removeAttributeNode(attribute) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next === attribute) {
        const {_prev, _next, name} = attribute;
        _prev._next = _next;
        _next._prev = _prev;
        attribute.ownerElement = attribute._prev = attribute._next = null;
        if (name === 'class')
          this._classList = null;
        return;
      }
      _next = _next._next;
    }
    throw new Error('Node was not found');
  }

  /**
   * @param {Attr} attribute
   */
  setAttributeNode(attribute) {
    const previously = this.getAttributeNode(attribute.name);
    if (previously !== attribute) {
      if (previously)
        this.removeAttributeNode(previously);
      const {ownerElement} = attribute;
      const {_next} = this;
      if (ownerElement)
        ownerElement.removeAttributeNode(attribute);
      attribute.ownerElement = this;
      attribute._prev = this;
      attribute._next = _next;
      this._next = _next._prev = attribute;
      if (attribute.name === 'class')
        this.className = attribute.value;
    }
    return previously;
  }

  /**
   * @param {string} name
   */
  hasAttribute(name) {
    return !!this.getAttributeNode(name);
  }

  hasAttributes() {
    return this._next.nodeType === ATTRIBUTE_NODE;
  }

  getAttributeNames() {
    return this.attributes.map(({name}) => name);
  }

  /**
   * @param {string} name
   * @returns {string?}
   */
  getAttribute(name) {
    const attribute = this.getAttributeNode(name);
    return attribute && attribute.value;
  }

  /**
   * @param {string} name
   */
  removeAttribute(name) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next.name === name) {
        this.removeAttributeNode(_next);
        return;
      }
      _next = _next._next;
    }
  }

  /**
   * @param {string} name
   * @param {string|any} value casted, if not string
   */
  setAttribute(name, value) {
    let attribute = this.getAttributeNode(name);
    if (attribute)
      attribute.value = String(value);
    else {
      attribute = this.ownerDocument.createAttribute(name);
      attribute.value = String(value);
      this.setAttributeNode(attribute);
    }
  }

  /**
   * @param {string} name
   * @param {boolean?} force
   */
  toggleAttribute(name, force) {
    if (this.hasAttribute(name)) {
      if (!force) {
        this.removeAttribute(name);
        return false;
      }
      return true;
    }
    else if (force || arguments.length === 1){
      this.setAttribute(name, '');
      return true;
    }
    return false;
  }

  toString() {
    const out = [];
    const {_end} = this;
    let _next = {_next: this};
    let isOpened = false;
    do {
      _next = _next._next;
      switch (_next.nodeType) {
        case ATTRIBUTE_NODE:
          out.push(' ' + _next);
          break;
        case ELEMENT_NODE_END:
          if (isOpened && isVoidElement(_next))
            out.push(ignoreCase(_next) ? '>' : ' />');
          else
            out.push(`${isOpened ? '>' : ''}</${_next.localName}>`);
          isOpened = false;
          break;
        case ELEMENT_NODE:
          out.push(`${isOpened ? '>' : ''}<${_next.localName}`);
          isOpened = true;
          break;
        case TEXT_NODE:
        case COMMENT_NODE:
          out.push((isOpened ? '>' : '') + _next);
          isOpened = false;
          break;
      }
    } while (_next !== _end);
    return out.join('');
  }

  /**
   * @param {string} name 
   */
  getElementsByTagName(name) {
    const elements = new NodeList;
    let {_next} = this;
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && (
        _next.localName === name || _next.tagName === name
      ))
        elements.push(_next);
      _next = _next._next;
    }
    return elements;
  }

  /**
   * @param {string} className 
   */
  getElementsByClassName(className) {
    const elements = new NodeList;
    let {_next} = this;
    while (_next) {
      if (
        _next.nodeType === ELEMENT_NODE &&
        _next.hasAttribute('class') &&
        _next.classList.has(className)
      )
        elements.push(_next);
      _next = _next._next;
    }
    return elements;
  }

  /**
   * @param {string} selectors
   * @returns {boolean}
   */
  matches(selectors) {
    return matches(this, selectors);
  }

  /* c8 ignore start */

  /**
   * @deprecated
   * @param {string} namespace
   * @param {string} name
   * @returns {string?}
   */
  getAttributeNS(_, name) {
    return this.getAttribute(name);
  }

  /**
   * @deprecated
   * @param {string} namespace 
   * @param {string} name 
   */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }

  /**
   * @deprecated
   * @param {string} namespace 
   * @param {string} name 
   */
  hasAttributeNS(_, name) {
    return this.hasAttribute(name);
  }

  /**
   * @deprecated
   * @param {string} namespace
   * @param {string} name
   */
  removeAttributeNS(_, name) {
    this.removeAttribute(name);
  }

  /**
   * @deprecated
   * @param {string} namespace
   * @param {string} name
   * @param {string|any} value casted, if not string
   */
  setAttributeNS(_, name, value) {
    this.setAttribute(name, value);
  }

  /* c8 ignore stop */
}
exports.Element = Element
