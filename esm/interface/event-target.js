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
    if (dispatched && event.bubbles && !event._stopPropagationFlag) {
      const parent = this._getParent();
      if (parent && parent.dispatchEvent) 
        return parent.dispatchEvent(event);
    }
    return dispatched;
  }
}

export { DOMEventTarget as EventTarget };
