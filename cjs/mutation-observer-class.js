'use strict';
let queue = Promise.resolve();
let toBeScheduled = true;

const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {_active, _observers} = element.ownerDocument._observer;
  if (_active) {
    for (const {_nodes, _records} of _observers) {
      if (_nodes.has(element)) {
        const {
          attributes,
          attributeFilter,
          attributeOldValue
        } = _nodes.get(element);
        if (attributes && (!attributeFilter || attributeFilter.includes(attributeName))) {
          _records.push({
            type: 'attributes',
            attributeName,
            oldValue: attributeOldValue ? oldValue : void 0
          });
          if (toBeScheduled) {
            toBeScheduled = false;
            queue.then(() => {
              toBeScheduled = true;
              for (const {_callback, _records} of _observers)
                _callback(_records.splice(0));
            });
          }
        }
        return;
      }
    }
  }
};
exports.attributeChangedCallback = attributeChangedCallback;

class MutationObserverClass {
  constructor(ownerDocument) {
    const observers = new Set;
    this._observers = observers;
    this._active = false;

    /**
     * @implements globalThis.MutationObserver
     */
    this._class = class MutationObserver {

      constructor(callback) {
        this._callback = callback;
        this._nodes = new Map;
        this._records = [];
      }

      disconnect() {
        observers.delete(this);
        ownerDocument._observer._active = !!observers.size;
        this._nodes.clear();
        this._records.splice(0);
      }

      /**
       * @param {Element} target
       * @param {MutationObserverInit} options
       */
      observe(target, options = {
        subtree: false,
        childList: false,
        attributes: false,
        attributeFilter: null,
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false
      }) {
        observers.add(this);
        ownerDocument._observer._active = true;
        if (options.attributeOldValue || options.attributeFilter)
          options.attributes = true;
        this._nodes.set(target, options);
      }

      /**
       * @returns {MutationRecord[]}
       */
      takeRecords() {
        return this._records.splice(0);
      }
    }
  }
}
exports.MutationObserverClass = MutationObserverClass
