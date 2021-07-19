'use strict';
// https://dom.spec.whatwg.org/#interface-eventtarget

const EventTarget = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('@ungap/event-target'));

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

exports.EventTarget = DOMEventTarget;
