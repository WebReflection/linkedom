'use strict';
const {ELEMENT_NODE} = require("./constants.js");

const {entries, setPrototypeOf} = Object;

let reactive = false;

const getReactive = () => reactive;
exports.getReactive = getReactive;

const setReactive = value => {
  reactive = value;
};
exports.setReactive = setReactive;

const Classes = new WeakMap;
exports.Classes = Classes;

const customElements = new WeakMap;
exports.customElements = customElements;

const attributeChangedCallback = (element, attributeName, oldValue, newValue) => {
  if (
    reactive &&
    customElements.has(element) &&
    element.attributeChangedCallback &&
    element.constructor.observedAttributes.includes(attributeName)
  ) {
    element.attributeChangedCallback(attributeName, oldValue, newValue);
  }
};
exports.attributeChangedCallback = attributeChangedCallback;

const createTrigger = (method, isConnected) => element => {
  if (customElements.has(element)) {
    const info = customElements.get(element);
    if (isConnected && info.setup) {
      info.setup = false;
      const {observedAttributes} = element.constructor;
      for (const {name, value} of element.attributes) {
        if (observedAttributes.includes(name))
          element.attributeChangedCallback(name, null, value);
      }
    }
    if (info.connected !== isConnected && element.isConnected === isConnected) {
      info.connected = isConnected;
      if (method in element)
        element[method]();
    }
  }
};

const triggerConnected = createTrigger('connectedCallback', true);
const connectedCallback = element => {
  if (reactive) {
    triggerConnected(element);
    let {_next, _end} = element;
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE)
        triggerConnected(_next);
      _next = _next._next;
    }
  }
};
exports.connectedCallback = connectedCallback;

const triggerDisconnected = createTrigger('disconnectedCallback', false);
const disconnectedCallback = element => {
  if (reactive) {
    triggerDisconnected(element);
    let {_next, _end} = element;
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE)
        triggerDisconnected(_next);
      _next = _next._next;
    }
  }
};
exports.disconnectedCallback = disconnectedCallback;

/**
 * @implements globalThis.CustomElementRegistry
 */
class CustomElementRegistry {

  /**
   * @param {Document} ownerDocument 
   */
  constructor(ownerDocument) {
    this._ownerDocument = ownerDocument;
    this._registry = new Map;
    this._waiting = new Map;
    this._active = false;
  }

  /**
   * @param {string} localName the custom element definition name
   * @param {Function} Class the custom element **Class** definition
   * @param {object?} options the optional object with an `extends` property
   */
  define(localName, Class, options = {}) {
    const {_ownerDocument, _registry, _waiting} = this;

    if (_registry.has(localName))
      throw new Error('unable to redefine ' + localName);

    if (Classes.has(Class))
      throw new Error('unable to redefine the same class: ' + Class);

    this._active = (reactive = true);

    const {extends: extend} = options;

    Classes.set(Class, {
      ownerDocument: _ownerDocument,
      options: {is: extend ? localName : ''},
      localName: extend || localName
    });

    const check = extend ?
      element => {
        return element.localName === extend &&
               element.getAttribute('is') === localName;
      } :
      element => element.localName === localName;
    _registry.set(localName, {Class, check});
    if (_waiting.has(localName)) {
      for (const resolve of _waiting.get(localName))
        resolve(Class);
      _waiting.delete(localName);
    }
    _ownerDocument.querySelectorAll(
      extend ? `${extend}[is="${localName}"]` : localName
    ).forEach(this.upgrade, this);
  }

  /**
   * @param {Element} element
   */
  upgrade(element) {
    if (customElements.has(element))
      return;
    const {_registry} = this;
    const ce = element.getAttribute('is') || element.localName;
    if (_registry.has(ce)) {
      const {Class, check} = _registry.get(ce);
      if (check(element)) {
        const {attributes, isConnected} = element;
        for (const attr of attributes)
          element.removeAttributeNode(attr);

        const values = entries(element);
        for (const [key] of values)
          delete element[key];

        setPrototypeOf(element, new Class(this._ownerDocument, ce));
        customElements.set(element, {connected: isConnected, setup: false});

        for (const [key, value] of values)
          element[key] = value;

        for (const attr of attributes)
          element.setAttributeNode(attr);

        if (isConnected && element.connectedCallback)
          element.connectedCallback();
      }
    }
  }

  /**
   * @param {string} localName the custom element definition name
   */
  whenDefined(localName) {
    const {_registry, _waiting} = this;
    return new Promise(resolve => {
      if (_registry.has(localName))
        resolve(_registry.get(localName).Class);
      else {
        if (!_waiting.has(localName))
          _waiting.set(localName, []);
        _waiting.get(localName).push(resolve);
      }
    });
  }

  /**
   * @param {string} localName the custom element definition name
   * @returns {Function?} the custom element **Class**, if any
   */
  get(localName) {
    const info = this._registry.get(localName);
    return info && info.Class;
  }
}
exports.CustomElementRegistry = CustomElementRegistry
