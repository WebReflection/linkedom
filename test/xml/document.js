const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<root></root>', 'text/xml');

assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><root />');

assert(document.documentElement.tagName, 'root');
assert(document.documentElement.nodeName, 'root');


document.documentElement.innerHTML = `
<Something>
  <Element>Text</Element>
  <Element>Text</Element>
</Something>
`.trim();

assert(document.querySelectorAll('Element').length, 2, 'case sesntivive 2');
assert(document.querySelectorAll('element').length, 0, 'case sesntivive 0');

const caseDocument = (new DOMParser).parseFromString('<root SomeAttr="a"><Child AnotherAttr="b" /></root>', 'text/xml');
const caseRoot = caseDocument.documentElement;

assert(caseRoot.getAttributeNames().join(' '), 'SomeAttr', 'XML attribute names keep their case when parsed');
assert(caseRoot.getAttribute('SomeAttr'), 'a', 'XML attributes are reachable with their case');
assert(caseRoot.getAttribute('someattr'), null, 'XML attributes are not reachable lowercased');
assert(caseRoot.firstElementChild.getAttribute('AnotherAttr'), 'b', 'XML children attributes keep their case too');

caseRoot.setAttribute('OtherAttr', 'c');
assert(caseRoot.getAttributeNames().join(' '), 'OtherAttr SomeAttr', 'setAttribute keeps the XML attribute case');
assert(caseRoot.getAttribute('OtherAttr'), 'c', 'setAttribute stored the XML attribute case');
assert(caseRoot.getAttribute('otherattr'), null, 'setAttribute did not lowercase the XML attribute');
caseRoot.removeAttribute('SomeAttr');
assert(caseRoot.getAttributeNames().join(' '), 'OtherAttr', 'removeAttribute keeps the XML attribute case');

assert(caseDocument.createAttribute('Data-Foo').name, 'Data-Foo', 'createAttribute keeps the case in an XML document');
assert(caseDocument.toString(), '<?xml version="1.0" encoding="utf-8"?><root OtherAttr="c"><Child AnotherAttr="b" /></root>', 'XML serialization keeps the case');

const svgDocument = (new DOMParser).parseFromString('<svg viewBox="0 0 1 1"><text textLength="10">x</text></svg>', 'image/svg+xml');
assert(svgDocument.querySelector('[viewBox]'), svgDocument.documentElement, 'SVG selectors stay case sensitive in an SVG document');
assert(svgDocument.querySelector('text').getAttribute('textLength'), '10', 'SVG attribute names keep their case in an SVG document');
assert(svgDocument.querySelector('text').getAttribute('textlength'), null, 'SVG attribute names are not lowercased in an SVG document');
