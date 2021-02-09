const assert = require('../assert.js').for('SVGDocument');

const {DOMParser, Document} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<!doctype svg><svg></svg>', 'image/svg+xml');

assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg><svg />');
assert(document instanceof Document, true, 'proper instance');

try {
  new Document;
  assert(false, true, 'facades should not be instantiable');
}
catch (OK) {}
