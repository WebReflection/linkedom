import {
  ELEMENT_NODE, ELEMENT_NODE_END,
  ATTRIBUTE_NODE, TEXT_NODE, COMMENT_NODE
} from './constants.js';

import {
  getNext, getPrev, setAdjacent,
  ignoreCase, localCase,
  parseFromString,
  setBoundaries,
  findNext
} from './utils.js';

import {attributeChangedCallback as ceAttributes, setReactive} from './custom-element-registry.js';
import {attributeChangedCallback as moAttributes} from './mutation-observer-class.js';

import {NodeList} from './interfaces.js';
import {NonDocumentTypeChildNode, ParentNode} from './mixins.js';

import {Attr} from './attr.js';
import {NodeElement, NodeElementEnd} from './node.js';
import {ShadowRoot} from './shadow-root.js';
import {NamedNodeMap} from './named-node-map.js';

import {DOMStringMap} from './dom-string-map.js';
import {DOMTokenList} from './dom-token-list.js';
import {CSSStyleDeclaration} from './css-style-declaration.js';

import {matches} from './matches.js';

const shadowRoots = new WeakMap;

const attributesHandler = {
  get(target, key) {
    return key in target ? target[key] : target.find(({name}) => name === key);
  }
};

const isVoidElement = ({localName, ownerDocument}) => {
  return ownerDocument._mime.voidElements.test(localName);
};

/**
 * @implements globalThis.Element
 */
export class Element extends NodeElement {

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

  // awkward ... but necessary to avoid triggering Custom Events
  // while created through the parseFromString procedure
  set innerHTML(html) {
    setReactive(false);
    const {ownerDocument} = this;
    const {constructor, _customElements} = ownerDocument;
    const document = new constructor;
    document._customElements = _customElements;
    const {childNodes} = parseFromString(document, ignoreCase(this), html).root;
    const fragment = ownerDocument.createDocumentFragment();
    fragment.append(...childNodes);
    setReactive(true);
    this.replaceChildren(fragment);
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
    const attributes = new NamedNodeMap(this);
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

  /**
   * @param {object} init either `{mode: "open"}` or `{mode: "closed"}`
   */
  attachShadow(init) {
    if (shadowRoots.has(this))
      throw new Error('operation not supported');
    // TODO: shadowRoot should be likely a specialized class that extends DocumentFragment
    //       but until DSD is out, I am not sure I should spend time on this.
    const shadowRoot = new ShadowRoot(this.ownerDocument);
    shadowRoot.append(...this.childNodes);
    shadowRoots.set(this, {
      mode: init.mode,
      shadowRoot
    });
    return shadowRoot;
  }

  /**
   * @type {ShadowRoot?}
   */
  get shadowRoot() {
    if (shadowRoots.has(this)) {
      const {mode, shadowRoot} = shadowRoots.get(this);
      if (mode === 'open')
        return shadowRoot;
    }
    return null;
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
   * @param {'beforebegin'|'afterbegin'|'beforeend'|'afterend'} position
   * @param {Element} element 
   */
  insertAdjacentElement(position, element) {
    const {parentElement} = this;
    switch (position) {
      case 'beforebegin':
        if (parentElement) {
          parentElement.insertBefore(element, this);
          break;
        }
        return null;
      case 'afterbegin':
        this.insertBefore(element, this.firstChild);
        break;
      case 'beforeend':
        this.insertBefore(element, null);
        break;
      case 'afterend':
        if (parentElement) {
          parentElement.insertBefore(element, this.nextSibling);
          break;
        }
        return null;
    }
    return element;
  }

  /**
   * @param {'beforebegin'|'afterbegin'|'beforeend'|'afterend'} position
   * @param {string} html 
   */
  insertAdjacentHTML(position, html) {
    const template = this.ownerDocument.createElement('template');
    template.innerHTML = html;
    this.insertAdjacentElement(position, template.content);
  }

  /**
   * @param {'beforebegin'|'afterbegin'|'beforeend'|'afterend'} position
   * @param {string} text 
   */
  insertAdjacentText(position, text) {
    const node = this.ownerDocument.createTextNode(text);
    this.insertAdjacentElement(position, node);
  }

  /**
   * @param {Attr} attribute
   */
  removeAttributeNode(attribute) {
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      if (_next === attribute) {
        const {_value, _prev, _next, name} = attribute;
        setAdjacent(_prev, _next);
        attribute.ownerElement = attribute._prev = attribute._next = null;
        if (name === 'class')
          this._classList = null;
        ceAttributes(this, name, _value, null);
        moAttributes(this, name, _value);
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
    const {name} = attribute;
    const previously = this.getAttributeNode(name);
    if (previously !== attribute) {
      if (previously)
        this.removeAttributeNode(previously);
      const {ownerElement} = attribute;
      const {_next} = this;
      if (ownerElement)
        ownerElement.removeAttributeNode(attribute);
      attribute.ownerElement = this;
      setBoundaries(this, attribute, _next);
      if (name === 'class')
        this.className = attribute._value;
      ceAttributes(this, name, null, attribute._value);
      moAttributes(this, name, null);
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
    const attributes = [];
    let {_next} = this;
    while (_next.nodeType === ATTRIBUTE_NODE) {
      attributes.push(_next.name);
      _next = _next._next;
    }
    return attributes;
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
      attribute.value = value;
    else
      this.setAttributeNode(new Attr(this.ownerDocument, name, value));
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
          const attr = ' ' + _next;
          switch (attr) {
            case ' id':
            case ' class':
            case ' style':
              break;
            default:
              out.push(attr);
          }
          break;
        case ELEMENT_NODE_END:
          if (isOpened) {
            if ('ownerSVGElement' in _next._start)
              out.push(' />');
            else if (isVoidElement(_next))
              out.push(ignoreCase(_next) ? '>' : ' />');
            else
              out.push(`></${_next.localName}>`);
            isOpened = false;
          }
          else
            out.push(`</${_next.localName}>`);
          break;
        case ELEMENT_NODE:
          if (isOpened)
            out.push('>');
          if (_next.toString !== this.toString) {
            out.push(_next.toString());
            _next = _next._end;
            isOpened = false;
          }
          else {
            out.push(`<${_next.localName}`);
            isOpened = true;
          }
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
    let {_next, _end} = findNext(this);
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE && (
        _next.localName === name ||
        _next.tagName === name
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
    let {_next, _end} = findNext(this);
    while (_next !== _end) {
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

  /**
   * @deprecated
   * @param {Attr} attr
   */
  setAttributeNodeNS(attr) {
    return this.setAttributeNode(attr);
  }

  /* c8 ignore stop */
}
