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
const htmlDoc = parser.parseFromString(`<div><span content-desc="text3&amp;more"/></div>`, 'text/html').documentElement;

assert(htmlDoc.firstChild.getAttribute('content-desc'), 'text3&more');
assert(htmlDoc.firstChild.outerHTML, '<span content-desc="text3&more"></span>');
assert(htmlDoc.innerHTML, '<span content-desc="text3&more"></span>');

htmlDoc.firstChild.setAttribute('content-desc', ''); // attribute is not in emptyAttributes set is empty
assert(htmlDoc.firstChild.getAttribute('content-desc'), '');
assert(htmlDoc.firstChild.outerHTML, '<span content-desc=""></span>');
assert(htmlDoc.innerHTML, '<span content-desc=""></span>');

const htmlDocWithEmptyAttrFromSet = parser.parseFromString(`<div><span style=""/></div>`, 'text/html').documentElement; // attribute is in emptyAttributes set is empty

assert(htmlDocWithEmptyAttrFromSet.firstChild.getAttribute('style'), '');
assert(htmlDocWithEmptyAttrFromSet.firstChild.outerHTML, '<span></span>');
assert(htmlDocWithEmptyAttrFromSet.innerHTML, '<span></span>');

const xmlDoc = parser.parseFromString(`<hierarchy><android.view.View content-desc="text3&amp;more"/></hierarchy>`, 'text/xml').documentElement;

assert(xmlDoc.firstChild.getAttribute('content-desc'), 'text3&amp;more');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="text3&amp;more" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="text3&amp;more" />');

xmlDoc.firstChild.setAttribute('content-desc', '');// attribute is not in emptyAttributes set is empty (even for XML)
assert(xmlDoc.firstChild.getAttribute('content-desc'), '');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="" />');

const xmlDocWithEmptyAttrFromSet = parser.parseFromString(`<hierarchy><android.view.View style=""/></hierarchy>`, 'text/xml').documentElement;// attribute is in emptyAttributes set is empty (even for XML)
assert(xmlDocWithEmptyAttrFromSet.firstChild.getAttribute('style'), '');
assert(xmlDocWithEmptyAttrFromSet.firstChild.outerHTML, '<android.view.View style="" />');
assert(xmlDocWithEmptyAttrFromSet.innerHTML, '<android.view.View style="" />');
