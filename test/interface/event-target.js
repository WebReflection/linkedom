const assert = require('../assert.js').for('EventTarget');

const { parseHTML } = global[Symbol.for('linkedom')];

const { Event, document, window, EventTarget } = parseHTML(
  '<html><div id="container"><button id="buttonTarget" type="button">Click me!</button></div></html>',
);

// check basics

let callCount = 0;
const basicHandler = () => {
  callCount++;
};


const eventTarget = new EventTarget();
eventTarget.addEventListener('foo', basicHandler);
eventTarget.addEventListener('foo', basicHandler);
eventTarget.dispatchEvent(new Event('foo'));
assert(callCount, 1, 'basicHandler should have been called once');

assert(
  eventTarget.dispatchEvent(new Event('click')),
  true,
  'Dispatching an event type with no handlers should return true',
);
assert(callCount, 1, 'Dispatching an event type should only call appropriate listeners');

eventTarget.removeEventListener('foo', basicHandler);
eventTarget.removeEventListener('click', basicHandler);
eventTarget.dispatchEvent(new Event('foo'));
assert(callCount, 1, 'basicHandler should not have been called after being removed');

assert(eventTarget._getParent(), null, 'getParent should return null');


// check propagation now
callCount = 0;
const buttonTarget = document.getElementById('buttonTarget');
const containerTarget = document.getElementById('container');
const bodyTarget = document;

buttonTarget.addEventListener(
  'click',
  event => {
    basicHandler();
    assert(
      event.target,
      buttonTarget,
      'Event bubbling, target should be the button'
    );
    assert(
      event.currentTarget,
      buttonTarget,
      'Event bubbling, current target should be the button'
    );
    assert(
      event.composedPath().length,
      5,
      'Event bubbling, composed path should have 5 EventTarget'
    );
  },
  { once: true }
);

containerTarget.addEventListener('click', event => {
  basicHandler();
  assert(
    event.target,
    buttonTarget,
    'Event bubbling, target should be the button'
  );
  assert(
    event.currentTarget,
    containerTarget,
    'Event bubbling, current target should be the container'
  );
}, { once: true });

containerTarget.addEventListener('click', () => {
  basicHandler();
}, { once: true });

bodyTarget.addEventListener('click', event => {
  basicHandler();
  assert(
    event.target,
    buttonTarget,
    'Event bubbling, target should be the button'
  );
  assert(
    event.currentTarget,
    bodyTarget,
    'Event bubbling, current target should be the body'
  );
}, { once: true });


document.addEventListener('click', event => {
  basicHandler();
  assert(
    event.target,
    buttonTarget,
    'Event bubbling, target should be the button'
  );
  assert(
    event.currentTarget,
    document,
    'Event bubbling, current target should be the document'
  );
}, { once: true });

window.addEventListener('click', event => {
  basicHandler();
  assert(
    event.target,
    buttonTarget,
    'Event bubbling, target should be the button'
  );
  assert(
    event.currentTarget !== buttonTarget,
    true,
    'Event bubbling, current target should be the window'
  );
}, { once: true });

buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 6, 'Event bubbling, listener should be called 6 times');

// ensure once removed listeners
buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 6, 'listeners should only have been called once then removed');

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
buttonTarget.addEventListener('click', () => callCount++, { once: true });
buttonTarget.addEventListener(
  'click',
  (event) => {
    event.stopImmediatePropagation();
    callCount++;
  },
  {
    once: true,
  },
);
buttonTarget.addEventListener('click', () => callCount++, { once: true });
containerTarget.addEventListener('click', basicHandler, { once: true });

callCount = 0;
buttonTarget.dispatchEvent(new Event('click', { bubbles: true }));
assert(callCount, 2, '2 listeners should be called before stopping');
