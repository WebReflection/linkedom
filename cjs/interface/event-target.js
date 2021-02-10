'use strict';
// https://dom.spec.whatwg.org/#interface-eventtarget

const EventTarget = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('@ungap/event-target'));

/**
 * @implements globalThis.EventTarget
 */
exports.EventTarget = EventTarget;
