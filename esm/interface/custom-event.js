// https://dom.spec.whatwg.org/#interface-customevent

/* c8 ignore start */

// One day Node might have CustomEvent too

import {Event} from './event.js';

/**
 * @implements globalThis.CustomEvent
 */
export class CustomEvent extends Event {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
}

/* c8 ignore stop */
