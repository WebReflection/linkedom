import {ELEMENT_NODE} from "../cjs/constants";

const {keys, setPrototypeOf} = Object;

export const classes = new WeakMap;

const shouldTrigger = element => {
  const {_active, _hold} = element.ownerDocument._customElements;
  return _active && !_hold;
};

export const attributeChangedCallback = (element, name, oldValue, newValue) => {
  if (
    element._custom &&
    element.attributeChangedCallback &&
    element.constructor.observedAttributes.includes(name)
  ) {
    element.attributeChangedCallback(name, oldValue, newValue);
  }
};

const triggerConnected = element => {
  if (element._custom && element.connectedCallback && element.isConnected)
    element.connectedCallback();
};

export const connectedCallback = element => {
  if (shouldTrigger(element)) {
    triggerConnected(element);
    let {_next, _end} = element;
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE)
        triggerConnected(_next);
      _next = _next._next;
    }
  }
};

const triggerDisconnected = element => {
  if (element._custom && element.disconnectedCallback && !element.isConnected)
    element.disconnectedCallback();
};

export const disconnectedCallback = element => {
  if (shouldTrigger(element)) {
    triggerDisconnected(element);
    let {_next, _end} = element;
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE)
        triggerDisconnected(_next);
      _next = _next._next;
    }
  }
};

/**
 * @implements globalThis.CustomElementRegistry
 */
export class CustomElementRegistry {

  /**
   * @param {Document} ownerDocument 
   */
  constructor(ownerDocument) {
    this._ownerDocument = ownerDocument;
    this._registry = new Map;
    this._waiting = new Map;
    this._active = false;
    this._hold = false;
  }

  /**
   * @param {string} localName the custom element definition name
   * @param {Function} Class the custom element **Class** definition
   * @param {object?} options the optional object with an `extends` property
   */
  define(localName, Class, options = {}) {
    const {_ownerDocument, _registry, _waiting} = this;

    if (_registry.has(localName) || classes.has(Class))
      throw new Error('unable to redefine ' + localName);

    if (classes.has(Class))
      /* c8 ignore next */
      throw new Error('unable to redefine the same class: ' + Class);

    this._active = true;

    const {extends: extend} = options;

    classes.set(Class, {
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
    if (element._custom)
      return;
    const {_registry} = this;
    const ce = element.getAttribute('is') || element.localName;
    if (_registry.has(ce)) {
      const {Class, check} = _registry.get(ce);
      if (check(element)) {
        const {attributes} = element;
        const upgrade = new Class(this._ownerDocument, ce);
        for (const attr of attributes)
          upgrade.setAttributeNode(attr);
        for (const key of keys(element)) {
          const value = element[key];
          delete element[key];
          upgrade[key] = value;
        }
        setPrototypeOf(element, upgrade);
        element._custom = true;
        if (element.isConnected)
          connectedCallback(element);
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
