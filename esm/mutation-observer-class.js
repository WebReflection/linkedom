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
        _callback(_records.splice(0), observer);
      });
    }
  }
};

export const attributeChangedCallback = (element, attributeName, oldValue) => {
  const {ownerDocument} = element;
  const {_active, _observers} = ownerDocument._observer;
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
          if (
            (subtree && (target === ownerDocument || target.contains(element))) ||
            (!subtree && target.children.includes(element))
          ) {
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

export const moCallback = (element, parentNode) => {
  const {ownerDocument} = element;
  const {_active, _observers} = ownerDocument._observer;
  if (_active) {
    for (const observer of _observers) {
      for (const [target, {subtree, childList, characterData}] of observer._nodes) {
        if (childList) {
          if (
            (parentNode && (target === parentNode || (subtree && target.contains(parentNode)))) ||
            (!parentNode && ((subtree && (target === ownerDocument || target.contains(element))) ||
                            (!subtree && target[characterData ? 'childNodes' : 'children'].includes(element))))
          ) {
            const {_callback, _records, _scheduled} = observer;
            _records.push(createRecord(
              'childList', target,
              parentNode ? [] : [element], parentNode ? [element] : []
            ));
            if (!_scheduled) {
              observer._scheduled = true;
              Promise.resolve().then(() => {
                observer._scheduled = false;
                _callback(_records.splice(0), observer);
              });
            }
            break;
          }
        }
      }
    }
  }
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
        // TODO: not implemented yet
        // characterDataOldValue: false
      }) {
        if (('attributeOldValue' in options) || ('attributeFilter' in options))
          options.attributes = true;
        // if ('characterDataOldValue' in options)
        //   options.characterData = true;
        options.childList = !!options.childList;
        options.subtree = !!options.subtree;
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
