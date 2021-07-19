// https://dom.spec.whatwg.org/#interface-eventtarget

import EventTarget from '@ungap/event-target';

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
        // in Node 16.5 the same event can't be used for another dispatch
        return parent.dispatchEvent(new event.constructor(event.type, options));
      }
    }
    return dispatched;
  }
}

export { DOMEventTarget as EventTarget };
