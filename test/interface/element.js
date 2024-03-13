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
const htmlDoc = parser.parseFromString(`<hierarchy><android.view.View content-desc="text3&amp;more"/></hierarchy>`, 'text/html').documentElement;

assert(htmlDoc.firstChild.getAttribute('content-desc'), 'text3&more');
assert(htmlDoc.firstChild.outerHTML, '<android.view.view content-desc="text3&more"></android.view.view>');
assert(htmlDoc.innerHTML, '<android.view.view content-desc="text3&more"></android.view.view>');

htmlDoc.firstChild.setAttribute('content-desc', '');
assert(htmlDoc.firstChild.getAttribute('content-desc'), '');
assert(htmlDoc.firstChild.outerHTML, '<android.view.view content-desc=""></android.view.view>');
assert(htmlDoc.innerHTML, '<android.view.view content-desc=""></android.view.view>');

const xmlDoc = parser.parseFromString(`<hierarchy><android.view.View content-desc="text3&amp;more"/></hierarchy>`, 'text/xml').documentElement;

assert(xmlDoc.firstChild.getAttribute('content-desc'), 'text3&amp;more');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="text3&amp;more" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="text3&amp;more" />');

xmlDoc.firstChild.setAttribute('content-desc', '');
assert(xmlDoc.firstChild.getAttribute('content-desc'), '');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="" />');
