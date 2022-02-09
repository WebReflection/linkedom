const BODY = '<body>Foo&nbsp;&quot;&nbsp;&quot;&nbsp;Bar</body>';
const REBODY = BODY.replace(/&quot;/g, '"');
const HTML = `<html id="html" class="live">${BODY}</html>`;
const REHTML = `<html id="html" class="live">${REBODY}</html>`;

const assert = require('../assert.js').for('Text Escaper');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<!DOCTYPE html>' + HTML);

assert(document.documentElement.toString(), REHTML);

document.documentElement.innerHTML = BODY;

assert(document.documentElement.toString(), REHTML);

document.documentElement.innerHTML = '<body>&amp;amp;</body>';
assert(document.documentElement.toString(), `<html id="html" class="live"><head></head><body>&amp;amp;</body></html>`);

