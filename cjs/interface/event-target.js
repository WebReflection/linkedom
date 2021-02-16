'use strict';
// https://dom.spec.whatwg.org/#interface-eventtarget

const EventTarget = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('@ungap/event-target'));

/**
 * @implements globalThis.EventTarget
 */
exports.EventTarget = EventTarget;
