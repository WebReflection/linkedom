const assert = require('../assert.js').for('Node');

const {parseHTML} = global[Symbol.for('linkedom')];

const {Image} = parseHTML('');

let img = new Image;
assert(img.toString(), '<img>');

img = new Image(1);
assert(img.toString(), '<img width="1" height="1">');

img = new Image(2, 3);
assert(img.toString(), '<img width="2" height="3">');

img.alt = 'test';
assert(img.toString(), '<img alt="test" width="2" height="3">');
