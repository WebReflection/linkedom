const assert = require('../assert.js').for('DOMStream');
const {Readable} = require('stream');
const fs = require('fs');
const {join} = require('path');

const {DOMStream, Document} = global[Symbol.for('linkedom')];

const domStream = new DOMStream('text/html', name => name === 'div');
const src = fs.createReadStream(join(__dirname, '../benchmark/html.html'));

let count = 0
src.pipe(domStream).ondocument(() => {
  count += 1
}).onerror(() => {
  assert(true, false, 'should not throw an error');
})
src.on('end', () => {
  assert(count, 3714);
});

src.once('document', document => {
  assert(document instanceof Document, true, 'proper instance');
});

const svgStream = new DOMStream('image/svg+xml', name => name === 'svg');
Readable.from([ '<!DOCTYPE svg><svg />']).pipe(svgStream).ondocument(document => {
  assert(document instanceof Document, true, 'proper instance');
});

const xmlStream = new DOMStream('text/xml', name => name === 'root');
Readable.from([ '<?xml version="1.0" encoding="utf-8"?><root />']).pipe(xmlStream).ondocument(document => {
  assert(document instanceof Document, true, 'proper instance');
});
