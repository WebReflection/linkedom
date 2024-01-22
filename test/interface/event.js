const assert = require('../assert.js').for('Event');

const {parseHTML} = global[Symbol.for('linkedom')];

const {Event, document} = parseHTML('<html><div /></html>');

let event = document.createEvent('Event');
event.initEvent('test-event');

let bubblingClickEvent = document.createEvent('HTMLEvents');
bubblingClickEvent.initEvent('click', true);

let customEvent = document.createEvent('CustomEvent');
customEvent.initCustomEvent('click', false, false, 123);

let args = null;
let documentArgs = null;
let composedPathArgs = [];

let node = document.getElementsByTagName('div')[0];
document.addEventListener('click', (ev) => {
  documentArgs = {
    target: ev.target,
    currentTarget: ev.currentTarget
  };
  composedPathArgs = ev.composedPath();
});
node.addEventListener('click', {
  handleEvent(event) {
    args = event;
  }
});

args = null;
documentArgs = null;

node.dispatchEvent(new Event('click'));
assert(args.type, 'click', 'handleEvent works');
assert(documentArgs, null)

args = null;
documentArgs = null;

node.dispatchEvent(customEvent);
assert(args.detail, 123, 'custom event works');
assert(documentArgs, null)

node.dispatchEvent(bubblingClickEvent);

assert(documentArgs.target, node, 'bubbled to document and node is target');
assert(documentArgs.currentTarget, document, 'bubbled to document and node is currentTarget');
assert(composedPathArgs.length, 3, 'should have 3 nodes');
assert(composedPathArgs[0], node, 'first is the node');
assert(composedPathArgs[1], document.firstChild, 'second last the html');
assert(composedPathArgs[2], document, 'last the document');