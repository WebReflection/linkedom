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