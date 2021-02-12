'use strict';
// https://dom.spec.whatwg.org/#interface-event

/* c8 ignore start */

// Node 15 has Event but 14 and 12 don't

/**
 * @implements globalThis.Event
 */
const GlobalEvent = typeof Event === 'function' ?
  Event :
  class Event {
    static BUBBLING_PHASE = 3;
    static CAPTURING_PHASE = 1;

    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.BUBBLING_PHASE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
    }

    get BUBBLING_PHASE() { return Event.BUBBLING_PHASE; }
    get CAPTURING_PHASE() { return Event.CAPTURING_PHASE; }

    preventDefault() { this.defaultPrevented = true; }

    // TODO: what do these do in native NodeJS Event ?
    stopPropagation() {}
    stopImmediatePropagation() {}
  };

exports.Event = GlobalEvent;

/* c8 ignore stop */
