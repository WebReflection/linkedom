const {assign} = Object;

const mutationObserverInit = {
  subtree: false,
  childList: false,
  attributes: false,
  attributeFilter: [],
  attributeOldValue: false,
  characterData: false,
  characterDataOldValue: false
};

let queue = Promise.resolve();
let toBeScheduled = true;

export const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {_active, _observers} = element.ownerDocument._observer;
  // TODO: c8 .. what do you want? everything is tested in here!
  /* c8 ignore start */
  if (_active) {
    for (const {_nodes, _records} of _observers) {
      if (_nodes.has(element)) {
        const {
          attributes,
          attributeFilter,
          attributeOldValue
        } = _nodes.get(element);
        if (attributes && attributeFilter.includes(attributeName)) {
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
  /* c8 ignore stop */
};

export class MutationObserverClass {
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
      }

      /**
       * @param {Element} target
       * @param {MutationObserverInit} options
       */
      observe(target, options) {
        observers.add(this);
        this._nodes.set(target, assign({}, mutationObserverInit, options));
        ownerDocument._observer._active = true;
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
