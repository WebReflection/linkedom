const {Readable} = require('stream');
const assert = require('../assert.js').for('HTMLAsStream');

const {DOMParser, Document} = global[Symbol.for('linkedom')];

const stream = Readable.from(['<!doctype svg><svg></svg>'])
const promise = (new DOMParser).parseFromString(stream, 'image/svg+xml');

assert(promise instanceof Promise, true, 'promise');

promise.then(document => {
  assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg><svg />');
  assert(document instanceof Document, true, 'proper instance');
});

(new DOMParser).parseFromString(Readable.from([null]), 'image/svg+xml')
  .then(() => assert(false, true, 'should throw an error'))
  .catch(() => {});

