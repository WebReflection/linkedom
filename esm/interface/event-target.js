// https://dom.spec.whatwg.org/#interface-eventtarget

import EventTarget from '@ungap/event-target';

function define(target, name, value) {
  Object.defineProperty(
    target,
    name,
    {
      configurable: true,
      writable: true,
      value: value
    }
  );
}

/**
 * @implements globalThis.EventTarget
 */
class DOMEventTarget extends EventTarget {

  /**
   * @protected
   */
  _getParent() {
    return null;
  }

  dispatchEvent(event) {
    const originalTarget = event.target || this;
    const dispatched = super.dispatchEvent(event);

    // intentionally simplified, specs imply way more code: https://dom.spec.whatwg.org/#event-path
    if (dispatched && event.bubbles && !event.cancelBubble) {
      const parent = this._getParent();
      if (parent && parent.dispatchEvent) {
        const options = {
          bubbles: event.bubbles,
          cancelable: event.cancelable,
          composed: event.composed,
        };
        const parentEvent = new event.constructor(event.type, options);
        define(parentEvent, 'target', originalTarget);
        return parent.dispatchEvent(parentEvent);
      }
    }
    return dispatched;
  }
}

export { DOMEventTarget as EventTarget };
