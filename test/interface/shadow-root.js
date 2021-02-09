const assert = require('../assert.js').for('DocumentType');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<!doctype html><html />');

const {documentElement} = document;

assert(documentElement.shadowRoot, null, 'no shadowRoot');

const shadowRoot = documentElement.attachShadow({mode: 'open'});

assert(documentElement.shadowRoot, shadowRoot, 'yes shadowRoot');

try {
  documentElement.attachShadow({mode: 'open'});
  assert(true, false, 'double shadowRoot should not be possible');
} catch (ok) {}


