const assert = require('../assert.js').for('Event');

const {parseHTML} = global[Symbol.for('linkedom')];

const {Event, document} = parseHTML('<html><div /></html>');

let event = document.createEvent('Event');
event.initEvent('test-event');

let customEvent = document.createEvent('CustomEvent');
customEvent.initCustomEvent('click', false, false, 123);

let args = null;
let node = document.getElementsByTagName('div')[0];
node.addEventListener('click', {
  handleEvent(event) {
    args = event;
  }
});
node.dispatchEvent(new Event('click'));
assert(args.type, 'click', 'handleEvent works');

node.dispatchEvent(customEvent);
assert(args.detail, 123, 'custom event works');
