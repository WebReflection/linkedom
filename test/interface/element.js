const assert = require('../assert.js').for('Text');

const {parseHTML, DOMParser} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div><span></span></div></html>');

let div = document.querySelector('div');

div.firstChild.outerHTML = 'hello';
assert(div.firstChild.toString(), 'hello');

div.innerHTML = '<span></span>'
div.firstChild.outerHTML = '<p>hello</p>';
assert(div.firstChild.toString(), '<p>hello</p>');

div.innerHTML = '<span></span>'
div.firstChild.outerHTML = '<p>hello</p> world';
assert(div.toString(), '<div><p>hello</p> world</div>');

assert(div.namespaceURI, 'http://www.w3.org/1999/xhtml');

const parser = new DOMParser();
const doc = parser.parseFromString(`<hierarchy><android.view.View content-desc="text3&amp;more"/></hierarchy>`, 'text/xml').documentElement;

assert(doc.firstChild.getAttribute('content-desc'), 'text3&amp;more');
assert(doc.firstChild.outerHTML, '<android.view.View content-desc="text3&amp;more" />');
assert(doc.innerHTML, '<android.view.View content-desc="text3&amp;more" />');
