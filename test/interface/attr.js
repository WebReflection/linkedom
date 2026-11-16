const assert = require('../assert.js').for('Attr');

const {parseHTML, DOMParser} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html test />');

const attr = document.documentElement.getAttributeNode('test');

assert(JSON.stringify(attr.cloneNode()), '[2,"test"]');

attr.value = 456;
assert(JSON.stringify(attr.cloneNode()), '[2,"test","456"]');

const {attributes} = document.documentElement;

assert(attributes.length, 1, 'attributes.length');
assert(attributes.item(0), attr, 'attributes.item()');
assert(attributes.getNamedItem('test'), attr, 'getNamedItem');
assert(attributes.removeNamedItem('test'), void 0, 'removeNamedItem');
assert(attributes.item(0), null, 'attributes.item()');
assert(attributes.setNamedItem(attr), void 0, 'setNamedItem');

/** @type {(str: string) => Document} */
const parseXML = xmlStr => new DOMParser().parseFromString(xmlStr, 'text/xml');
const xmlDoc = parseXML('<element attr="a&quot;b&quot;c"></element>');

assert(xmlDoc.toString(), '<?xml version="1.0" encoding="utf-8"?><element attr="a&quot;b&quot;c" />');
assert(xmlDoc.firstElementChild.toString(), '<element attr="a&quot;b&quot;c" />');
assert(xmlDoc.firstElementChild.outerHTML, '<element attr="a&quot;b&quot;c" />');
assert(xmlDoc.firstElementChild.attributes.attr.value, 'a"b"c');

// https://github.com/WebReflection/linkedom/issues/340
const {document: htmlDoc} = parseHTML('<!doctype html><html><body><div id="t"></div></body></html>');
const div = htmlDoc.getElementById('t');
div.setAttribute('data-x', 'A &amp; B');
assert(div.outerHTML, '<div id="t" data-x="A &amp;amp; B"></div>', 'HTML attribute & is escaped');
assert(parseHTML(`<!doctype html><html><body>${div.outerHTML}</body></html>`).document.getElementById('t').getAttribute('data-x'), 'A &amp; B', 'HTML attribute round trip');
div.setAttribute('data-x', 'a b "c"');
assert(div.outerHTML, '<div id="t" data-x="a&nbsp;b &quot;c&quot;"></div>', 'HTML attribute U+00A0 is escaped');
