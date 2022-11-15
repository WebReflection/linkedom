'use strict';
// https://dom.spec.whatwg.org/#interface-customevent

/* c8 ignore start */

// One day Node might have CustomEvent too

const {Event} = require('./event.js');

/**
 * @implements globalThis.CustomEvent
 */
class CustomEvent extends Event {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
}
exports.CustomEvent = CustomEvent

/* c8 ignore stop */
