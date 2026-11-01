const assert = require('../assert.js').for('HTMLDocument');

const {parseHTML} = global[Symbol.for('linkedom')];

const {DocumentFragment} = require('../../cjs/interface/document-fragment.js');

const {Document, DOMParser, window, setTimeout} = parseHTML(`
<!doctype html>
<html>
  <head><title>hello</title></head>
</html>
`);

const clone = window.document.cloneNode(true);
assert(clone.isConnected, true, 'document always connected');
assert(JSON.stringify(clone), '[9,10,"html",1,"html",1,"head",1,"title",3,"hello",-4]');
assert(clone.doctype.nodeType, 10);
assert(clone.isEqualNode(clone), true, 'isEqualNode');
assert(clone.isEqualNode(window.document), true, 'isEqualNode');

let document = (new DOMParser).parseFromString('', 'text/html');
assert(document.doctype, null);

document.insertBefore(document.createElement('html'));
assert(document.doctype, null);

document.insertBefore(clone.doctype, document.firstChild);
assert(document.doctype, clone.doctype);

assert(setTimeout, global.setTimeout);

try {
  new Document;
  assert(true, false, 'Document should be used as class');
} catch (ok) {}

document = (new DOMParser).parseFromString('<!DOCTYPE html><html />', 'text/html');
assert(document.title, '', 'no title');
document.title = '"hello"';
assert(document.title, '"hello"', 'title not escaped');

assert(document.toString(), '<!DOCTYPE html><html><head><title>"hello"</title></head></html>');
assert(document.body.tagName, 'BODY');

document.title = 'I';
assert(document.title + document.title + document.title, 'III', 'side-effects detected when inspecting the title');

document.title = '&';
assert(document.toString(), '<!DOCTYPE html><html><head><title>&</title></head><body></body></html>');

assert(document.all.length, 4);
assert(document.all[0], document.querySelector('html'));
assert(document.all[1], document.querySelector('head'));
assert(document.all[2], document.querySelector('title'));
assert(document.all[3], document.querySelector('body'));

// global listener
let triggered = false;
window.addEventListener('test', function once() {
  triggered = true;
  window.removeEventListener('test', once);
});

window.dispatchEvent(new window.Event('test'));
assert(triggered, true);

window.anyValue = 123;
assert(window.anyValue, 123);
window.addEventListener = window.removeEventListener = window.dispatchEvent = null;
assert(window.addEventListener, null);

assert(typeof window.performance.now(), 'number');

assert(parseHTML('<html><body><div>asdf</div></body></html>').document.body.outerHTML, '<body><div>asdf</div></body>');

const location = {href: 'http://ok'};
const withLocation = parseHTML('<html></html>', {location});
assert(withLocation.document.defaultView.location, location);
assert(withLocation.document.baseURI, location.href);

const withBase = parseHTML('<html><base href="http://base"></html>', {location});
assert(withBase.document.documentElement.baseURI, 'http://base');

assert((new DocumentFragment).baseURI, null);

const {document: svg} = (new DOMParser).parseFromString('<svg class="foo-1"/>', 'text/html').defaultView.window;
assert(svg.querySelector('[class*="foo-"]'), svg.firstElementChild);

const {document: emptyClass} = parseHTML('<div><p id="a" class=""></p><p id="b"></p><svg><rect id="c" class=""/><rect id="d"/></svg></div>');
assert(emptyClass.querySelectorAll('[class=""]').map(({id}) => id).join(','), 'a,c', '[class=""] only matches empty class attributes');
emptyClass.getElementById('a').removeAttribute('class');
emptyClass.getElementById('b').className = 'x';
emptyClass.getElementById('b').classList.remove('x');
assert(emptyClass.querySelectorAll('[class=""]').map(({id}) => id).join(','), 'b,c', '[class=""] follows class mutations');

assert((new DOMParser).parseFromString('...', 'text/html').firstElementChild.localName, 'html');

const issue187 = (new DOMParser).parseFromString(`<!DOCTYPE html><html><head></head><body></body></html>`, 'text/html').defaultView.window.document;
issue187.body.innerHTML = '<span></span>';
let span = issue187.body.firstElementChild;
assert(span.ownerDocument.body, issue187.body);

// https://html.spec.whatwg.org/multipage/parsing.html#attribute-name-state
// https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
const attributeCaseDocument = (new DOMParser).parseFromString('<!DOCTYPE html><html><body><div ID="target" CLASS="a b" STYLE="color: red"></div></body></html>', 'text/html');
const idElement = attributeCaseDocument.getElementById('target');

assert(idElement.tagName, 'DIV', 'getElementById finds an uppercase ID attribute');
assert(idElement.getAttributeNames().join(' '), 'id class style', 'uppercase ID, CLASS and STYLE are parsed as lowercase');
assert(idElement.className, 'a b', 'classList reads the uppercase CLASS attribute');
assert(idElement.classList.contains('b'), true, 'classList contains the uppercase CLASS tokens');
assert(idElement.style.color, 'red', 'style reads the uppercase STYLE attribute');
assert(idElement.getAttribute('class'), 'a b', 'getAttribute reads the uppercase CLASS attribute');
assert(idElement.getAttribute('CLASS'), 'a b', 'getAttribute lowercases CLASS through classList');
assert(idElement.toString(), '<div id="target" class="a b" style="color: red"></div>', 'uppercase attributes serialize lowercased');

idElement.setAttribute('CLASS', 'c');
assert(idElement.className, 'c', 'setAttribute updates the lowercase class attribute');
assert(idElement.getAttributeNames().join(' '), 'id class style', 'setAttribute does not duplicate the class attribute');
assert(idElement.toString(), '<div id="target" class="c" style="color: red"></div>', 'setAttribute keeps serialization lowercase');
assert(idElement.getAttribute('CLASS'), 'c', 'getAttribute reads class after a CLASS update');
