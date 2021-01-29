const getCE = element => element.getAttribute('is') || element.localName;

export const classes = new WeakMap;

const {keys, setPrototypeOf} = Object;

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
    const ce = getCE(element);
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
        if (element.isConnected && element.connectedCallback)
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
