const assert = require('../assert.js').for('HTMLImageElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><img></html>');

const {firstElementChild: img} = document.documentElement;

img.src = 'example.org';
assert(img.src, 'example.org', 'Issue #10 - <img>.src');
assert(img.toString(), '<img src="example.org">', 'Issue #10 - <img>.src');

img.width = 99;
assert(img.toString(), '<img width="99" src="example.org">', '<img>.width');
assert(img.width, 99);
assert(img.height, 0);
assert(img.lastChild, null, 'lastChild');
