'use strict';
// TODO: this stuff is complex

const {setPrototypeOf} = Object;

const getCE = element => element.getAttribute('is') || element.localName;

// be sure it's not one of those fancy old-style elements forbidden as CE
const isCE = element => getCE(element).includes('-');
exports.isCE = isCE;

/**
 * @implements globalThis.CustomElements
 */
class CustomElements {

  constructor() {
    this._registry = new Map;
    this._waiting = new Map;
  }

  define(localName, Class, options = {}) {
    const {_registry, _waiting} = this;
    if (_registry.has(localName))
      throw new Error('unable to re-define ' + localName);

    const {extends: extend} = options;
    const check = extend ?
      element => {
        return element.localName === extend || 
               element.getAttribute('is') === localName;
      } :
      element => element.localName === localName;
    _registry.set(localName, {Class, check});
    if (_waiting.has(localName)) {
      for (const resolve of _waiting.get(localName))
        resolve(Class);
      _waiting.delete(localName);
    }
  }

  upgrade(node) {
    const {_registry} = this;
    const ce = getCE(node);
    if (_registry.has(ce)) {
      const {Class, check} = _registry.get(ce);
      if (check(node))
        setPrototypeOf(node, Class.prototype);
    }
  }

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

  get(localName) {
    const info = this._registry.get(localName);
    return info && info.Class;
  }
}
exports.CustomElements = CustomElements
