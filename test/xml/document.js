const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<root></root>', 'text/xml');

assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><root />');

assert(document.documentElement.tagName, 'root');
assert(document.documentElement.nodeName, 'root');
