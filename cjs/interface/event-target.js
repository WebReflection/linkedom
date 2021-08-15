'use strict';
// https://dom.spec.whatwg.org/#interface-eventtarget

const {Dictionary} = require('../shared/dictionary.js');

const eventTargetMap = new Map();

function dispatch({options, target, listener}) {
  if (options && options.once)
    target.removeEventListener(this.type, listener);
  if (typeof listener === 'function') {
    listener.call(target, this);
  } else {
    listener.handleEvent(this);
  }
  return this._stopImmediatePropagationFlag;
}

function invokeListeners({currentTarget, target}) {
  const secret = eventTargetMap.get(currentTarget);
  const listeners = secret && secret[this.type];
  if (listeners) {
    if (currentTarget === target) {
      this.eventPhase = this.AT_TARGET;
    } else {
      this.eventPhase = this.BUBBLING_PHASE;
    }
    this.currentTarget = currentTarget;
    this.target = target;
    listeners.slice(0).some(dispatch, this);
    delete this.currentTarget;
    delete this.target;
  }
  return this.cancelBubble;
}

/**
 * @implements globalThis.EventTarget
 */
class DOMEventTarget {

  constructor() {
    eventTargetMap.set(this, new Dictionary());
  }

  /**
   * @protected
   */
  _getParent() {
    return null;
  }

  addEventListener(type, listener, options) {
    const secret = eventTargetMap.get(this);
    const listeners = secret[type] || (secret[type] = []);
    if (listeners.some(info => info.listener === listener)) {
      return;
    }
    listeners.push({target: this, listener, options});
  }

  removeEventListener(type, listener) {
    const secret = eventTargetMap.get(this);
    const listeners = secret[type] || (secret[type] = []);
    secret[type] = listeners.filter(info => info.listener !== listener);
  }

  dispatchEvent(event) {
    let node = this;
    event.eventPhase = event.CAPTURING_PHASE;

    // intentionally simplified, specs imply way more code: https://dom.spec.whatwg.org/#event-path
    while (node) {
      if (node.dispatchEvent)
        event._path.push({currentTarget: node, target: this});
      node = event.bubbles && node._getParent && node._getParent();
    }
    event._path.some(invokeListeners, event);
    event._path = [];
    event.eventPhase = event.NONE;
    return !event.defaultPrevented;
  }

}

exports.EventTarget = DOMEventTarget;
