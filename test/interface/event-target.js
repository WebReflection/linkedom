const assert = require('../assert.js').for('EventTarget');

const { parseHTML } = global[Symbol.for('linkedom')];

const { Event, document, EventTarget } = parseHTML(
  '<html><div id="container"><button id="buttonTarget" type="button">Click me!</button></div></html>',
);

// check basics

let callCount = 0;
const basicHandler = () => {
  callCount++;
};


const eventTarget = new EventTarget();
eventTarget.addEventListener('foo', basicHandler);
eventTarget.dispatchEvent(new Event('foo'));
assert(callCount, 1, 'basicHandler should have been called');

assert(
  eventTarget.dispatchEvent(new Event('click')),
  true,
  'Dispatching an event type with no handlers should return true',
);
assert(callCount, 1, 'Dispatching an event type should only call appropriate listeners');

eventTarget.removeEventListener('foo', basicHandler);
eventTarget.dispatchEvent(new Event('foo'));
assert(callCount, 1, 'basicHandler should not have been called after being removed');

assert(eventTarget._getParent(), null, 'getParent should return null');


// check propagation now
callCount = 0;
const buttonTarget = document.getElementById('buttonTarget');
const containerTarget = document.getElementById('container');
const bodyTarget = document;
buttonTarget.addEventListener('click', basicHandler, { once: true });
containerTarget.addEventListener('click', basicHandler, { once: true });
bodyTarget.addEventListener('click', basicHandler, { once: true });

buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 3, 'Event bubbling, listener should be called 3 times');


// ensure once removed listeners
buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 3, 'listeners should only have been called once then removed');

// check no bubbling
callCount = 0;
buttonTarget.addEventListener('click', basicHandler, { once: true });
containerTarget.addEventListener('click', basicHandler, { once: true });
bodyTarget.addEventListener('click', basicHandler, { once: true });

buttonTarget.dispatchEvent(new Event('click', { bubbles: false }));
assert(callCount, 1, 'Expect listener to be called once');

// check stop propagation
buttonTarget.addEventListener(
  'click',
  (event) => {
    event.stopPropagation();
    callCount++;
  },
  {
    once: true,
  },
);
containerTarget.addEventListener('click', basicHandler, { once: true });

callCount = 0;
buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 1, 'listener should be called once before stopping bubbling');

// check stop immediate propagation
// specs mention for stopImmediatePropagation "set this’s stop propagation flag and this’s stop immediate propagation flag"
// https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
// but Node don't do that - will check if that's a bug or expected for them
const isNode16 = Event._stopImmediatePropagationFlag !== false;
buttonTarget.addEventListener(
  'click',
  (event) => {
    event.stopImmediatePropagation();
    if (isNode16) {
      event.stopPropagation();
    }
    callCount++;
  },
  {
    once: true,
  },
);
containerTarget.addEventListener('click', basicHandler, { once: true });

callCount = 0;
buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 1, 'listener should be called once before stopping bubbling');
