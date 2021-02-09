const assert = require('../assert.js').for('Attr');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html test />');

const attr = document.documentElement.getAttributeNode('test');

assert(JSON.stringify(attr.cloneNode()), '[2,"test"]');

attr.value = 456;
assert(JSON.stringify(attr.cloneNode()), '[2,"test","456"]');

const {attributes} = document.documentElement;

assert(attributes.length, 1, 'attributes.length');
assert(attributes.item(0), attr, 'attributes.item()');
assert(attributes.getNamedItem('test'), attr, 'getNamedItem');
assert(attributes.removeNamedItem('test'), void 0, 'removeNamedItem');
assert(attributes.item(0), null, 'attributes.item()');
assert(attributes.setNamedItem(attr), void 0, 'setNamedItem');

