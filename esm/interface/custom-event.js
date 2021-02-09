// https://dom.spec.whatwg.org/#interface-customevent

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
