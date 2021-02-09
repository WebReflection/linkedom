const assert = require('../assert.js').for('DocumentType');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<!doctype html>');

assert(document.childNodes[0].nodeType, 10);
assert(JSON.stringify(document.childNodes[0].cloneNode()), '[10,"html"]');

