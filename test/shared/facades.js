const assert = require('../assert.js').for('Facades');

const {Attr, parseHTML} = global[Symbol.for('linkedom')];

const {Attr: $Attr, document} = parseHTML('');

assert(Attr, $Attr, 'same classes');
