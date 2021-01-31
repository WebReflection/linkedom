const createRecord = (
  type,
  target,
  addedNodes,
  removedNodes,
  attributeName,
  oldValue
) => ({
  type,
  target,
  addedNodes,
  removedNodes,
  attributeName,
  oldValue
});

const queueAttribute = (observer, target, attributeName, attributeFilter, attributeOldValue, oldValue) => {
  if ((!attributeFilter || attributeFilter.includes(attributeName))) {
    const {_callback, _records, _scheduled} = observer;
    _records.push(createRecord(
      'attributes', target,
      [], [],
      attributeName, attributeOldValue ? oldValue : void 0
    ));
    if (!_scheduled) {
      observer._scheduled = true;
      Promise.resolve().then(() => {
        observer._scheduled = false;
        _callback(_records.splice(0));
      });
    }
  }
};

export const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {_active, _observers} = element.ownerDocument._observer;
  if (_active) {
    for (const observer of _observers) {
      for (const [
        target,
        {
          childList,
          subtree,
          attributes,
          attributeFilter,
          attributeOldValue
        }
      ] of observer._nodes) {
        if (childList) {
          if ((subtree && target.contains(element)) || (!subtree && target.children.includes(element))) {
            queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
            break;
          }
        }
        else if (
          attributes &&
          target === element
        ) {
          queueAttribute(observer, element, attributeName, attributeFilter, attributeOldValue, oldValue);
          break;
        }
      }
    }
  }
};

/*
// let's make it work first, somehow ...
const createTrigger = isConnected => target => {
  const {_active, _observers} = target.ownerDocument._observer;
  if (_active) {
    for (const {_nodes, _records} of _observers) {
      if (_nodes.has(target)) {
        const {
          subtree,
          childList,
          characterData,
          characterDataOldValue,
          connected
        } = _nodes.get(target);
        if (childList && connected !== isConnected && target.isConnected === isConnected) {
          const nodes = characterData ? target.childNodes : target.children;
          _records.push(createRecord(
            'childList', target,
            isConnected  ? nodes : [], isConnected ? [] : nodes,
            null, void 0
          ));
        }
        return;
      }
    }
  }
};

export const connectedCallback = createTrigger(true);

export const disconnectedCallback = createTrigger(false);
*/

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
        this._scheduled = false;
      }

      disconnect() {
        this._records.splice(0);
        this._nodes.clear();
        observers.delete(this);
        ownerDocument._observer._active = !!observers.size;
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
        if (('attributeOldValue' in options) || ('attributeFilter' in options))
          options.attributes = true;
        if ('characterDataOldValue' in options)
          options.characterData = true;
        options.childList = !!options.childList;
        options.subtree = !!options.subtree;
        options.connected = options.childList && target.isConnected;
        this._nodes.set(target, options);
        observers.add(this);
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
