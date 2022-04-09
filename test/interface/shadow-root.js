const assert = require('../assert.js').for('DocumentType');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<!doctype html><html />');

const {documentElement} = document;

assert(documentElement.shadowRoot, null, 'no shadowRoot');

const shadowRoot = documentElement.attachShadow({mode: 'open'});

assert(documentElement.shadowRoot, shadowRoot, 'yes shadowRoot');

assert(documentElement.shadowRoot.host, documentElement, 'yes shadowRoot.host');

try {
  documentElement.attachShadow({mode: 'open'});
  assert(true, false, 'double shadowRoot should not be possible');
} catch (ok) {}

shadowRoot.innerHTML = '<div class="js-shadowChild">content</div>';
assert(shadowRoot.innerHTML, '<div class="js-shadowChild">content</div>', 'shadowRoot innerHTML should be properly defined');
