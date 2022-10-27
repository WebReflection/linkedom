const assert = require('../assert.js').for('DOMStream');
const fs = require('fs');
const {join} = require('path');

const {DOMStream} = global[Symbol.for('linkedom')];

const domStream = new DOMStream('text/html', (name) => {
  return name === 'div';
});
const src = fs.createReadStream(join(__dirname, '../benchmark/html.html'));

let count = 0
src.pipe(domStream).ondocument(() => {
  count += 1
});
src.on('end', () => {
  assert(count, 3714);
});
