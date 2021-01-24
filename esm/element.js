import {ELEMENT_NODE, ELEMENT_NODE_END, ATTRIBUTE_NODE, TEXT_NODE, COMMENT_NODE} from './constants.js';
import {isHTML, isVoidElement, localCase, parseFromString} from './utils.js';

import {NodeList} from './interfaces.js';
import {NonDocumentTypeChildNode, ParentNode} from './mixins.js';

import {NodeElement, NodeElementEnd} from './node.js';
import {DOMStringMap} from './dom-string-map.js';
import {DOMTokenList} from './dom-token-list.js';

import matches from './matches.js';

const {getPrototypeOf} = Object;

const attributesHandler = {
  get(target, key) {
    return key in target ? target[key] : target.find(({name}) => name === key);
  }
};

export class Element extends NodeElement {

  constructor(ownerDocument, localName) {
    super(ownerDocument, localName, ELEMENT_NODE);
    this._classList = null;
    this._dataset = null;
    this._next = this._end = new NodeElementEnd(this);
  }

  // <ParentNode>
  get children() {
    return ParentNode.children(this);
  }

  get firstElementChild() {
    return ParentNode.firstElementChild(this);
  }

  get lastElementChild() {
    return ParentNode.lastElementChild(this);
  }

  get childElementCount() {
    return ParentNode.childElementCount(this);
  }

  prepend(...nodes) {
    return ParentNode.prepend(this, ...nodes);
  }

  append(...nodes) {
    return ParentNode.append(this, ...nodes);
  }

  replaceChildren(...nodes) {
    return ParentNode.replaceChildren(this, ...nodes);
  }
  // </ParentNode>

  get id() {
    return this.getAttribute('id') || '';
  }

  set id(value) {
    this.setAttribute('id', value);
  }

  get className() {
    return [...this.classList].join(' ');
  }

  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }

  get nodeName() {
    return localCase(this);
  }

  get tagName() {
    return localCase(this);
  }

  get classList() {
    return this._classList || (this._classList = new DOMTokenList(this));
  }

  get dataset() {
    return this._dataset || (this._dataset = new DOMStringMap(this));
  }

  get innerHTML() {
    return this.childNodes.join('');
  }

  set innerHTML(html) {
    const {constructor} = this.ownerDocument;
    const document = parseFromString(new constructor, isHTML(this), html);
    this.replaceChildren(...document.documentElement.childNodes);
  }

  get outerHTML() {
    return this.toString();
  }

  set outerHTML(html) {
    const template = document.createElement('<>');
    template.innerHTML = html;
    this.parentNode.replaceChild(template.firstElementChild, this);
  }

  get attributes() {
    const attributes = [];
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(_next);
      _next = _next._next;
    }
    return new Proxy(attributes, attributesHandler);
  }

  get nextSibling() {
    return this._end._next;
  }

  get previousSibling() {
    return this._prev;
  }

  get nextElementSibling() {
    return NonDocumentTypeChildNode.nextElementSibling(this._end);
  }

  get previousElementSibling() {
    return NonDocumentTypeChildNode.previousElementSibling(this);
  }

  getAttributeNode(name) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next.name === name)
        return _next;
      _next = _next._next;
    }
    return null;
  }

  removeAttributeNode(attribute) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next === attribute) {
        const {_prev, _next} = attribute;
        _prev._next = _next;
        _next._prev = _prev;
        attribute.ownerElement = attribute._prev = attribute._next = null;
        return;
      }
      _next = _next._next;
    }
    throw new Error('Node was not found');
  }

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
    }
    return previously;
  }

  hasAttribute(name) {
    return !!this.getAttributeNode(name);
  }

  hasAttributeNS(_, name) {
    return this.hasAttribute(name);
  }

  hasAttributes() {
    return this._next.nodeType === ATTRIBUTE_NODE;
  }

  getAttributeNames() {
    return this.attributes.map(({name}) => name);
  }

  getAttribute(name) {
    const attribute = this.getAttributeNode(name);
    return attribute && attribute.value;
  }

  getAttributeNS(_, name) {
    return this.getAttribute(name);
  }

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

  removeAttributeNS(_, name) {
    this.removeAttribute(name);
  }

  setAttribute(name, value) {
    let attribute = this.getAttributeNode(name);
    if (attribute)
      attribute.value = value;
    else {
      attribute = this.ownerDocument.createAttribute(name);
      attribute.value = value;
      this.setAttributeNode(attribute);
    }
  }

  setAttributeNS(_, name, value) {
    this.setAttribute(name, value);
  }

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
            out.push(isHTML(_next) ? '>' : ' />');
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

  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }

  getElementsByClassName(className) {
    const elements = new NodeList;
    let {_next} = this;
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.classList.has(className))
        elements.push(_next);
      _next = _next._next;
    }
    return elements;
  }

  matches(selectors) {
    return matches(this, selectors);
  }
}
