const assert = require('../assert.js').for('HTMLTImeElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<time datetime="1989-06-03 16:00:00">A big event</time>');

const {lastElementChild: time} = document;

assert(time.dateTime, '1989-06-03 16:00:00');
time.setAttribute('datetime', '1989-06-04 00:00:00');
assert(time.dateTime, '1989-06-04 00:00:00');
time.dateTime = '2022-11-26 16:00:00';
assert(time.getAttribute('datetime'), '2022-11-26 16:00:00');
