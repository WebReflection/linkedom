'use strict';
// https://dom.spec.whatwg.org/#interface-customevent

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
