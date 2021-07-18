'use strict';
// https://dom.spec.whatwg.org/#interface-eventtarget

const EventTarget = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('@ungap/event-target'));

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

exports.EventTarget = DOMEventTarget;
