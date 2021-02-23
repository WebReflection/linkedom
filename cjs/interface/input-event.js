'use strict';
// https://dom.spec.whatwg.org/#interface-customevent

/* c8 ignore start */

// One day Node might have CustomEvent too

const {Event} = require('./event.js');

/**
 * @implements globalThis.InputEvent
 */
class InputEvent extends Event {
  constructor(type, inputEventInit = {}) {
    super(type, inputEventInit);
    this.inputType = inputEventInit.inputType;
    this.data = inputEventInit.data;
    this.dataTransfer = inputEventInit.dataTransfer;
    this.isComposing = inputEventInit.isComposing || false;
    this.ranges = inputEventInit.ranges;
  }
}
exports.InputEvent = InputEvent
/* c8 ignore stop */
