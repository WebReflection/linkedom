const assert = require('../assert.js').for('Node');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><head /><body><div /></body></html>');

const [head, body, div] = document.querySelectorAll('head,body,div');

assert(body.compareDocumentPosition(body), 0, 'body.compare(body)');
assert(body.compareDocumentPosition(div), 20, 'body.compare(div)');
assert(div.compareDocumentPosition(body), 10, 'div.compare(body)');
assert(body.compareDocumentPosition(head), 2, 'body.compare(head)');
assert(head.compareDocumentPosition(body), 4, 'head.compare(body)');
assert(div.compareDocumentPosition(head), 2, 'div.compare(head)');
assert(head.compareDocumentPosition(div), 4, 'head.compare(div)');
assert(head.compareDocumentPosition(document.createElement('nope')), 35, 'head.compare(disconnected)');
assert(document.createElement('nope').compareDocumentPosition(head), 37, 'head.compare(disconnected)');
