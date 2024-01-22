'use strict';
// https://dom.spec.whatwg.org/#interface-event

/* c8 ignore start */

// Node 15 has Event but 14 and 12 don't
const BUBBLING_PHASE = 3;
const AT_TARGET = 2;
const CAPTURING_PHASE = 1;
const NONE = 0;

function getCurrentTarget(ev) {
  return ev.currentTarget;
}

/**
 * @implements globalThis.Event
 */
class GlobalEvent {
    static get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    static get AT_TARGET() { return AT_TARGET; }
    static get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    static get NONE() { return NONE; }

    constructor(type, eventInitDict = {}) {
      this.type = type;
      this.bubbles = !!eventInitDict.bubbles;
      this.cancelBubble = false;
      this._stopImmediatePropagationFlag = false;
      this.cancelable = !!eventInitDict.cancelable;
      this.eventPhase = this.NONE;
      this.timeStamp = Date.now();
      this.defaultPrevented = false;
      this.originalTarget = null;
      this.returnValue = null;
      this.srcElement = null;
      this.target = null;
      this._path = [];
    }

    get BUBBLING_PHASE() { return BUBBLING_PHASE; }
    get AT_TARGET() { return AT_TARGET; }
    get CAPTURING_PHASE() { return CAPTURING_PHASE; }
    get NONE() { return NONE; }

    preventDefault() { this.defaultPrevented = true; }

    // simplified implementation, should be https://dom.spec.whatwg.org/#dom-event-composedpath
    composedPath() {
      return this._path.map(getCurrentTarget);
    }

    stopPropagation() {
      this.cancelBubble = true;
    }
    
    stopImmediatePropagation() {
      this.stopPropagation();
      this._stopImmediatePropagationFlag = true;
    }
  }

exports.Event = GlobalEvent;

/* c8 ignore stop */
