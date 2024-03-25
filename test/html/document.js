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

assert((new DOMParser).parseFromString('...', 'text/html').firstElementChild.localName, 'html');

const issue187 = (new DOMParser).parseFromString(`<!DOCTYPE html><html><head></head><body></body></html>`, 'text/html').defaultView.window.document;
issue187.body.innerHTML = '<span></span>';
let span = issue187.body.firstElementChild;
assert(span.ownerDocument.body, issue187.body);
