// https://dom.spec.whatwg.org/#interface-eventtarget

import EventTarget from '@ungap/event-target';

/**
 * @implements globalThis.EventTarget
 */
class DOMEventTarget extends EventTarget {
  getParent() {
    return null;
  }

  dispatchEvent(event) {
    super.dispatchEvent(event);

    // intentionally simplified, specs imply way more code: https://dom.spec.whatwg.org/#event-path
    if (event.bubbles && !event._stopPropagationFlag) {
      const parent = this.getParent();
      if (parent && parent.dispatchEvent) 
        parent.dispatchEvent(event);
    }
    return true;
  }
}

export { DOMEventTarget as EventTarget };
