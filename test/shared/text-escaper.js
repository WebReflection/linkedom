const BODY = '<body>Foo&#160;&quot;&#160;&quot;&#160;Bar</body>';
const REBODY_IN_HTML = '<body>Foo&nbsp;"&nbsp;"&nbsp;Bar</body>';
const REBODY_IN_XML = '<body>Foo\xA0"\xA0"\xA0Bar</body>';
const HTML = `<html id="html" class="live">${BODY}</html>`;
const REHTML_IN_HTML = `<html id="html" class="live">${REBODY_IN_HTML}</html>`;
const REHTML_IN_XML = `<html id="html" class="live">${REBODY_IN_XML}</html>`;

const assert = require('../assert.js').for('Text Escaper');

const {parseHTML, DOMParser} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<!DOCTYPE html>' + HTML);

assert(document.documentElement.toString(), REHTML_IN_HTML);

document.documentElement.innerHTML = BODY;

assert(document.documentElement.toString(), REHTML_IN_HTML);

document.documentElement.innerHTML = '<body>&amp;amp;</body>';
assert(document.documentElement.toString(), `<html id="html" class="live"><body>&amp;amp;</body></html>`);

document = (new DOMParser).parseFromString('<!DOCTYPE html>' + HTML, 'text/xml');

assert(document.documentElement.toString(), REHTML_IN_XML);

document.documentElement.innerHTML = BODY;

assert(document.documentElement.toString(), REHTML_IN_XML);

document.documentElement.innerHTML = '<body>&amp;amp;</body>';
assert(document.documentElement.toString(), `<html id="html" class="live"><body>&amp;amp;</body></html>`);
