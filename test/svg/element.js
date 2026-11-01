const assert = require('../assert.js').for('SVGElement');
const {parseHTML, SVGElement, DOMParser} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<div><svg><rect /></svg></div>');

assert(document.ELEMENT_NODE, 1);
assert(document.ATTRIBUTE_NODE, 2);
assert(document.TEXT_NODE, 3);
assert(document.COMMENT_NODE, 8);
assert(document.DOCUMENT_NODE, 9);
assert(document.DOCUMENT_TYPE_NODE, 10);
assert(document.DOCUMENT_FRAGMENT_NODE, 11);

let svg = document.querySelector('svg');
assert(svg instanceof SVGElement, true, '<svg> is an instance of a facade');
assert('ownerSVGElement' in svg, true, '<svg> ownerSVGElement');
assert(svg.ownerSVGElement, null, '<svg> ownerSVGElement is null');
assert(svg.firstChild.ownerSVGElement, svg, '<rect> has an ownerSVGElement');
assert(document.toString(), '<div><svg><rect /></svg></div>', 'svg nodes are OK');
assert(document.documentElement.cloneNode(true).outerHTML, '<div><svg><rect /></svg></div>', 'svg cloned');

assert(JSON.stringify(document), '[9,1,"div",1,"svg",1,"rect",-4]');
assert(JSON.stringify(svg), '[1,"svg",1,"rect",-2]');

try {
  new SVGElement;
  assert(false, true, 'facades should not be instantiable');
}
catch (OK) {}

document = (new DOMParser).parseFromString(`<!doctype html><html><svg><rect /></svg></html>`, 'text/html');

assert('ownerSVGElement' in document.querySelector('svg rect'), true, 'svg restored');

svg.className.what = 'ever';

assert(svg.className.what, 'ever', '<svg>.className');

svg.setAttribute('test', 123);
svg.setAttribute('style', 'width:100px');

assert(svg.toString(), '<svg style="width:100px" test="123"><rect /></svg>');

svg.className = 'a b c';
assert(svg.getAttribute('class'), 'a b c');

svg.setAttribute('class', 'd e');
assert(svg.getAttribute('class'), 'd e');
assert(svg.namespaceURI, 'http://www.w3.org/2000/svg');

const {document: svgCaseDocument} = parseHTML('<div><svg viewBox="0 0 1 1"><text textLength="10">x</text></svg></div>');
const svgCaseRoot = svgCaseDocument.querySelector('svg');
const svgCaseText = svgCaseDocument.querySelector('text');

assert(svgCaseRoot.getAttributeNames().join(' '), 'viewBox', 'SVG attributes in HTML keep their case when parsed');
assert(svgCaseRoot.getAttribute('viewBox'), '0 0 1 1', 'SVG attributes are reachable with their case');
assert(svgCaseRoot.getAttribute('viewbox'), null, 'SVG attributes are not reachable lowercased');
assert(svgCaseText.getAttribute('textLength'), '10', 'SVG children attributes keep their case too');
assert(svgCaseText.getAttribute('textlength'), null, 'SVG children attributes stay case sensitive');
assert(svgCaseRoot.toString(), '<svg viewBox="0 0 1 1"><text textLength="10">x</text></svg>', 'SVG serialization keeps the case');

svgCaseRoot.setAttribute('viewBox', '0 0 2 2');
assert(svgCaseRoot.getAttributeNames().join(' '), 'viewBox', 'setAttribute does not lowercase SVG attribute names');
assert(svgCaseRoot.getAttribute('viewBox'), '0 0 2 2', 'setAttribute kept the SVG attribute case');

svgCaseRoot.removeAttribute('viewBox');
assert(svgCaseRoot.hasAttributes(), false, 'removeAttribute does not lowercase SVG attribute names');

svgCaseRoot.innerHTML = '<text textLength="10">x</text>';
assert(svgCaseRoot.innerHTML, '<text textLength="10">x</text>', 'innerHTML keeps SVG attribute names as they are');
assert(svgCaseRoot.firstElementChild.getAttribute('textLength'), '10', 'innerHTML SVG attributes are reachable with their case');

svgCaseRoot.firstElementChild.innerHTML = '<tspan textLength="5">y</tspan>';
assert(svgCaseRoot.innerHTML, '<text textLength="10"><tspan textLength="5">y</tspan></text>', 'nested innerHTML keeps SVG attribute names');
