// https://dom.spec.whatwg.org/#interface-customevent

/* c8 ignore start */

// One day Node might have CustomEvent too

import {Event} from './event.js';

/**
 * @implements globalThis.InputEvent
 */
export class InputEvent extends Event {
  constructor(type, inputEventInit = {}) {
    super(type, inputEventInit);
    this.inputType = inputEventInit.inputType;
    this.data = inputEventInit.data;
    this.dataTransfer = inputEventInit.dataTransfer;
    this.isComposing = inputEventInit.isComposing || false;
    this.ranges = inputEventInit.ranges;
  }
}
/* c8 ignore stop */
