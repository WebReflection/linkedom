const {CustomEvent, DOMParser, parseHTML} = require('../cjs');

const assert = (expression, message) => {
  console.assert(expression, message);
  if (!expression)
    process.exit(1);
};

const milliseconds = ms => new Promise($ => setTimeout($, ms));

(async () => {

const svgDocument = (new DOMParser).parseFromString('<svg><rect /></svg>', 'image/svg+xml');
let xmlDocument = (new DOMParser).parseFromString('<svg><rect></rect></svg>', 'text/xml');
assert(xmlDocument.toString() === '<?xml version="1.0" encoding="utf-8"?><svg><rect /></svg>', 'xml toString');
assert(xmlDocument._mime.voidElements.test(xmlDocument.querySelector('rect')), 'xml always void');
// assert(!xmlDocument._mime.textOnly.test(xmlDocument.querySelector('rect')), 'xml always non text-only');

svgDocument.root = svgDocument.createElement('Svg');
assert(svgDocument.root.tagName === 'Svg', 'XML names are case-sensitive');

xmlDocument = (new DOMParser).parseFromString('', 'text/xml');
assert(xmlDocument.querySelector('nope') === null, 'no element selected');
assert(xmlDocument.querySelectorAll('nope').length === 0, 'empty NodeList');
assert(xmlDocument.getElementsByTagName('nope').length === 0, 'empty NodeList');
assert(xmlDocument.getElementsByTagNameNS('*', 'nope').length === 0, 'empty NodeList');
assert(xmlDocument.getElementsByClassName('nope').length === 0, 'empty NodeList');
assert(xmlDocument.children.length === 0, 'no children');
assert(xmlDocument.firstElementChild === null, 'no firstElementChild');
assert(xmlDocument.lastElementChild === null, 'no lastElementChild');
assert(xmlDocument.childElementCount === 0, 'childElementCount as 0');
assert(xmlDocument.toString() === '<?xml version="1.0" encoding="utf-8"?>', 'mime type only');

let {document} = parseHTML('<div><svg><rect /></svg></div>');

assert(document.ELEMENT_NODE, 'ELEMENT_NODE');
assert(document.ATTRIBUTE_NODE, 'ATTRIBUTE_NODE');
assert(document.TEXT_NODE, 'TEXT_NODE');
assert(document.COMMENT_NODE, 'COMMENT_NODE');
assert(document.DOCUMENT_NODE, 'DOCUMENT_NODE');
assert(document.DOCUMENT_FRAGMENT_NODE, 'DOCUMENT_FRAGMENT_NODE');

let svg = document.querySelector('svg');
assert('ownerSVGElement' in svg, '<svg> ownerSVGElement');
assert(svg.ownerSVGElement === null, '<svg> ownerSVGElement is null');
assert(svg.firstChild.ownerSVGElement === svg, '<rect> has an ownerSVGElement');
assert(document.toString() === '<!DOCTYPE html><html><div><svg><rect /></svg></div></html>', 'svg nodes are OK');
assert(document.documentElement.cloneNode(true).outerHTML === '<html><div><svg><rect /></svg></div></html>', 'svg cloned');

document = (new DOMParser).parseFromString('', 'text/html');

assert(document.defaultView.parseInt, 'defaultView');

assert(document.title, 'document.title');
assert(document.body, 'document.body');
assert(document.all.length > 0, 'document.all');

assert(document.toString() === '<!DOCTYPE html><html><head><title></title></head><body></body></html>', 'document sanity');

document = (new DOMParser).parseFromString('', 'text/html');
assert(typeof document.defaultView.MutationObserver === 'function', 'MutationObserver class');
let tmp = new document.defaultView.MutationObserver;
tmp.observe(document.documentElement);
tmp.disconnect();
assert(document.documentElement.attachShadow({mode: 'closed'}) === document.documentElement, 'closed shadowRoot');
assert(document.documentElement.attachShadow({mode: 'open'}) === document.documentElement, 'open shadowRoot');
assert(document.documentElement.shadowRoot === document.documentElement, 'shadowRoot');

assert(document.querySelector('nope') === null, 'no element selected');
assert(document.querySelectorAll('nope').length === 0, 'empty NodeList');
assert(document.getElementsByTagName('nope').length === 0, 'empty NodeList');
assert(document.getElementsByTagNameNS('*', 'nope').length === 0, 'empty NodeList');
assert(document.getElementsByClassName('nope').length === 0, 'empty NodeList');
assert(document.createAttribute('test').name === 'test', 'createAttribute');
assert(document.createAttribute('test').value === '', 'createAttribute');
assert(document.createTextNode('test').textContent === 'test', 'createTextNode');
assert(document.createTextNode('test').toString() === 'test', 'createTextNode');
assert(document.createComment('test').textContent === 'test', 'createComment');
assert(document.createComment('test').toString() === '<!--test-->', 'createComment');
assert(document.getElementById('test') === null, 'getElementById not found');
assert(document.children.length === 1, 'documentElement as children');
assert(document.firstElementChild === document.documentElement, 'documentElement as firstElementChild');
assert(document.lastElementChild === document.documentElement, 'documentElement as lastElementChild');
assert(document.childElementCount === 1, 'childElementCount as 1');

try { document.prepend('nope'); assert(false); } catch (ok) {}
try { document.append('nope'); assert(false); } catch (ok) {}
try { document.replaceChildren('nope'); assert(false); } catch (ok) {}

assert(!document.documentElement.classList.has('live'), 'html: no live class');
document.documentElement.classList.add('live');
assert(document.documentElement.className === 'live', 'html: live class');

assert(document.documentElement.tagName === 'HTML', 'HTML names are case-insensitive');

assert(!document.documentElement.hasAttribute('id'), '!hasAttribute');
document.documentElement.id = 'html';
assert(document.documentElement.hasAttribute('id'), 'hasAttribute');
document.documentElement.id = null;
assert(!document.documentElement.hasAttribute('id'), '!hasAttribute again');
document.documentElement.id = 'html';
assert(document.documentElement.getAttribute('id') === 'html', 'getAttribute');

assert(
  document.documentElement.matches('html') &&
  document.documentElement.matches('.live') &&
  document.documentElement.matches('#html')
);


assert(document.querySelector('html') === document.documentElement, 'document.querySelector');
assert(document.querySelectorAll('html')[0] === document.documentElement, 'document.querySelectorAll');

document.documentElement.append(
  document.createComment('<hello>'),
  document.createTextNode('<hello>')
);

assert(document.toString() === '<!DOCTYPE html><html id="html" class="live"><!--&lt;hello&gt;-->&lt;hello&gt;</html>', 'escaped content');
assert(document.documentElement.innerText === '<hello>', 'textContent read');

document.documentElement.innerHTML = '<div /><input><p />';
assert(document.toString() === '<!DOCTYPE html><html><div></div><input><p></p></html>', 'innerHTML + sanitizer');

document.documentElement.setAttribute('lang', 'en');
assert(document.documentElement.cloneNode(true).outerHTML === '<html lang="en"><div></div><input><p></p></html>', 'cloneNode(true).outerHTML');
assert(document.documentElement.cloneNode().outerHTML === '<html lang="en"></html>', 'cloneNode().outerHTML');

document.documentElement.append('a', 'b');
assert(document.documentElement.lastChild.previousSibling.textContent === 'a', 'previousSibling text');
let {length} = document.documentElement.childNodes;
document.documentElement.normalize();
assert(document.documentElement.childNodes.length === (length - 1), 'normalize merged text nodes');

let node = document.getElementsByTagName('div')[0];

node.before('before');
node.after('after');
assert(document.toString() === '<!DOCTYPE html><html lang="en">before<div></div>after<input><p></p>ab</html>', '.before() and after()');

node.replaceWith(document.createTextNode('&'));
assert(document.toString() === '<!DOCTYPE html><html lang="en">before&amp;after<input><p></p>ab</html>', '.before() and after()');

// assert(document.createElement('button', {is: 'special-case'}).getAttribute('is') === 'special-case', 'createElement with extra options');

assert(Object.keys(node.dataset).length === 0, 'empty dataset');
assert(node.dataset.testValue === null, 'no testValue');
node.dataset.testValue = 123;
assert(Object.keys(node.dataset).length === 1, 'not empty dataset');
assert(node.getAttribute('data-test-value') === '123', 'dataset.testValue');
delete node.dataset.testValue;
assert(Object.keys(node.dataset).length === 0, 'empty dataset again');

assert(node.className === '', 'no class name');
assert(node.classList.contains('test') === false, 'no test class');
node.classList.add('a', 'test', 'b');
assert(node.classList.value === 'a test b', 'correct .value');
assert(node.classList.contains('test') === true, 'test class');
node.classList.toggle('test');
assert(node.classList.contains('test') === false, 'no test class again');
node.classList.toggle('test', false);
assert(node.classList.contains('test') === false, 'no test class again 2');
node.classList.toggle('test');
assert(node.classList.contains('test') === true, 'test class in');
node.classList.toggle('test', true);
assert(node.classList.contains('test') === true, 'test class still in');
node.classList.toggle('test', false);
node.classList.toggle('test', true);
node.classList.remove('test');
assert(node.classList.contains('test') === false, 'no test class one more time');
assert(node.classList.replace('b', 'c') === true, 'replace happened');
assert(node.classList.value === 'a c', 'correct .value again');
assert(node.classList.replace('b', 'c') === false, 'replace did not happen');
assert(node.classList.supports('whatever'), 'whatever');

node = document.createDocumentFragment();
assert(node.getElementById('any') === null, 'no element by id');
assert(node.querySelector('div[id="any"]') === null, 'no querySelector');
assert(node.querySelectorAll('div[id="any"]').item(0) === null, 'no NodeList.item()');
assert(node.children.length === 0, 'no children');
assert(node.childElementCount === 0, 'childElementCount is 0');
node.appendChild(document.createElement('div')).id = 'any';
assert(node.isEqualNode(node.cloneNode(true)), 'isEqualNode');
assert(node.querySelector('div[id="any"]') === node.firstElementChild, 'yes querySelector');
assert(node.querySelectorAll('div[id="any"]').length === 1, 'yes querySelectorAll');
assert(node.querySelectorAll('div[id="any"]').item(0) === node.firstElementChild, 'yes NodeList.item()');
assert(node.getElementById('any') === node.firstElementChild, 'element by id');
assert(node.childElementCount === 1, 'childElementCount is 1');
assert(node.children.length === 1, 'children');
assert(node.firstElementChild === node.lastElementChild, 'element child');
node.prepend('a');
node.append('b');
assert(node.toString() === 'a<div id="any"></div>b', 'expected content');
node.replaceChildren('c', 'd');
assert(node.toString() === 'cd', 'expected content');
node.normalize();
assert(node.childNodes.length === 1, 'normalize()');
node.replaceChild(document.createElement('input'), node.firstChild);
assert(node.toString() === '<input>', 'expected content');

node = document.createElement('div');
assert(node.previousSibling === null, 'previousSibling null');
assert(node.firstChild === null);
assert(node.lastChild === null, 'lastChild with attribute');
node.setAttribute('tmp', '');
assert(node.lastChild === null, 'lastChild with attribute');
assert(!node.isEqualNode(document), 'no node is equal to the document');
node.innerHTML = '<!--comment--><input type="password" />OK';
assert(node.childNodes[1].previousSibling === node.firstChild, 'previousSibling comment');
assert(node.firstChild.previousSibling === null, 'previousSibling null');
assert(node.outerHTML === '<div><!--comment--><input type="password">OK</div>', 'comment and attributes parsed');

let triggered = false;
node.addEventListener('click', event => {
  assert(event.type === 'click' && event.detail === 123, 'click listener');
  triggered = true;
}, {once: true});
node.dispatchEvent(new CustomEvent('click', {detail: 123}));
assert(triggered, 'the click event triggered');

assert(node.children.length === 1, 'no children');
assert(node.childNodes.length === 3, 'no children');
assert(node.children[0] === node.firstElementChild, 'firstElementChild & children');
assert(node.children[0] === node.lastElementChild, 'lastElementChild & children');
assert(node.childNodes[0] === node.firstChild, 'firstChild & childNodes');
assert(node.childNodes[2] === node.lastChild, 'lastChild & childNodes');
node.prepend('before');
node.append('after');
node.replaceChildren('a', 'b', 'c');
assert(node.innerHTML === 'abc');
assert(node.childNodes.length === 3, 'replaceChildren & childNodes');
node.normalize();
assert(node.childNodes.length === 1, 'element normalize()');
assert(node.innerHTML === 'abc', 'normalized');
assert(node.id === '', 'no id');
assert(!node.hasAttribute('id'), 'no id');
node.id = 'test';
assert(node.hasAttribute('id'), 'yes id');
assert(node.className === '', 'no className');
node.className = ' a b ';
assert(node.className === 'a b', 'yes className');
assert(node.nodeName === 'DIV', 'nodeName');
assert(node.tagName === 'DIV', 'tagName');
assert(node.attributes.length === 2, 'attributes');
assert(node.attributes.id.value === 'test', 'attributes.id');
assert(node.attributes.class.value === 'a b', 'attributes.class');
assert(node.getAttributeNode('id') === node.attributes.id, 'getAttributeNode');
assert(node.getAttributeNode('nope') === null, 'getAttributeNode');
assert(node.attributes.nope === void 0, 'attributes.nope');
assert(node.nextSibling === null, 'no nextSibling');
assert(node.previousSibling === null, 'no previousSibling');
assert(node.nextElementSibling === null, 'no nextElementSibling');
assert(node.previousElementSibling === null, 'no previousElementSibling');
document.documentElement.append(node, document.createElement('p'));
assert(node.nextElementSibling !== null, 'yes nextElementSibling');
assert(node.previousElementSibling !== null, 'yes previousElementSibling');

let {class: klass} = node.attributes;
assert(node.hasAttributes(), 'hasAttributes');
assert(node.getAttributeNames().join(',') === 'class,id', 'getAttributeNames');
assert(klass.isEqualNode(klass.cloneNode(true)), 'attribute.isEqualNode()');
assert(klass.firstChild === null, 'attribute.firstChild');
assert(klass.lastChild === null, 'attribute.lastChild');
assert(klass.previousSibling === null, 'attribute.previousSibling');
assert(klass.nextSibling === null, 'attribute.nextSibling');
assert(klass.previousElementSibling === null, 'attribute.previousElementSibling');
assert(klass.nextElementSibling === null, 'attribute.nextElementSibling');
node.removeAttribute('id');
node.removeAttribute('class');
try {
  node.removeAttributeNode(klass);
  assert(false, 'removeAttributeNode should have thrown');
}
catch (OK) {}
assert(!node.hasAttributes(), 'hasAttributes');
assert(!node.hasAttribute('class'), 'removeAttributeNode');
assert(node.className === '', 'removeAttributeNode');
node.setAttributeNode(klass);
assert(node.className === 'a b', 'setAttributeNode');
klass = document.createAttribute('class');
klass.value = 'b c';
node.setAttributeNode(klass);
assert(node.className === 'b c', 'setAttributeNode');
assert(!node.matches('[disabled]'), 'no matches');
node.toggleAttribute('disabled');
assert(node.toString() === '<div disabled class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', true);
assert(node.toString() === '<div disabled class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', false);
assert(node.toString() === '<div class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', false);
node.toggleAttribute('disabled', true);
assert(node.toString() === '<div disabled class="b c">abc</div>', 'toggle');
assert(node.firstChild.previousElementSibling === null, 'previousElementSibling attributes');
assert(node.matches('[disabled]'), 'yes matches');
node.toggleAttribute('disabled');
assert(node.toString() === '<div class="b c">abc</div>', 'toggle');
assert(document.getElementsByClassName('b')[0] === node, 'getElementsByClassName');
let index = document.documentElement.childNodes.indexOf(node);
node.outerHTML = '<p id="outer-html"></p>';
assert(document.documentElement.childNodes.indexOf(node) < 0, 'outerHTML removed the node');
assert(document.getElementById('outer-html') === document.documentElement.childNodes[index]);
assert(document.documentElement.childElementCount, 'childElementCount');
document.documentElement.setAttributeNode(klass);
assert(document.documentElement.className === 'b c', 'moved attribute');

let text = document.createTextNode('text');
node.innerHTML = '<p></p>';
document.documentElement.appendChild(node);
text.before(node.firstChild);
text.after(node.firstChild);
assert(node.toString() === '<div><p></p></div>', 'before after not affected');
node.firstChild.textContent = '<test>';
assert(node.toString() === '<div><p>&lt;test&gt;</p></div>', 'before after not affected');
node.firstChild.textContent = '';
assert(node.toString() === '<div><p></p></div>', 'before after not affected');
assert(!text.isConnected, '!isConnected');
assert(!text.parentElement, '!parentElement');
assert(!node.contains(text), '!contains');
node.firstChild.appendChild(text);
assert(text.getRootNode() === document.documentElement, 'getRootNode');
assert(node.contains(text), 'contains');
assert(text.isConnected, 'isConnected');
assert(text.parentElement === node.firstChild, 'parentElement');
document.documentElement.cloneNode(true);
assert(node.toString() === '<div><p>text</p></div>', 'appended');
text.replaceWith(document.createComment('comment'));
assert(!text.isConnected, '!isConnected');
assert(node.toString() === '<div><p><!--comment--></p></div>', 'replaceWith');
document.documentElement.cloneNode(true);
node.firstChild.firstChild.cloneNode(true);
node.firstChild.firstChild.cloneNode();
assert(node.firstChild.closest('p') === node.firstChild, 'closest(sameNode)');
assert(node.firstChild.closest('nope') === null, 'closest(nope)');
assert(!node.firstChild.firstChild.isEqualNode(text), 'isEqualNode');
assert(node.firstChild.firstChild.isEqualNode(node.firstChild.firstChild.cloneNode(true)), 'isEqualNode');
node.firstChild.removeChild(node.firstChild.firstChild);
assert(node.isEqualNode(node.cloneNode(true)), 'isEqualNode');
assert(node.toString() === '<div><p></p></div>', 'remove');
assert(text.isEqualNode(text.cloneNode(true)), 'isEqualNode');
assert(text.isSameNode(text), 'isSameNode');
assert(text.nodeValue === text.textContent, 'nodeValue');
assert(text.data === text.textContent, 'data');
assert(text.firstChild === null, 'firstChild');
assert(text.lastChild === null, 'lastChild');
assert(text.nextSibling === null, 'nextSibling');
assert(text.previousSibling === null, 'previousSibling');
assert(text.nextElementSibling === null, 'nextElementSibling');
assert(text.previousElementSibling === null, 'previousElementSibling');
text.normalize();
assert(node.hasChildNodes(), 'hasChildNodes');
assert(!text.hasChildNodes(), '!hasChildNodes');
assert(text.getRootNode() === text, 'getRootNode');
assert(document.documentElement.parentElement === null, 'html.parentElement');
document.documentElement.insertBefore(text, null);
assert(document.documentElement.lastChild === text, 'insertBefore(node, null)');
node = document.createDocumentFragment();
node.prepend('a', document.createTextNode('b'), 'c');
assert(node.firstChild.nextElementSibling === null, 'nextElementSibling with text around');
document.documentElement.insertBefore(node, text);
node.append('a', '');
node.normalize();
assert(node.childNodes.length === 1, 'normalize() empty text');
try {
  node.removeChild(text);
  assert(false, 'removeChild');
}
catch (OK) {}
try {
  text.insertBefore();
  assert(false, 'insertBefore');
}
catch (OK) {}
try {
  text.appendChild();
  assert(false, 'appendChild');
}
catch (OK) {}
try {
  text.replaceChild();
  assert(false, 'replaceChild');
}
catch (OK) {}
try {
  text.removeChild();
  assert(false, 'removeChild');
}
catch (OK) {}

let template = document.createElement('template');
template.innerHTML = '<p>template</p>';
assert(template.content === template.content, 'template.content');
assert(template.innerHTML === '<p>template</p>', 'template.innerHTML');
document.documentElement.appendChild(template.content);
assert(template.innerHTML === '', 'empty template.innerHTML');

let range = document.createRange();
template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneRange().extractContents());
assert(node.toString() === '<p>b</p><p>c</p><p>d</p>', 'append extracted content');
assert(template.innerHTML === '<p>a</p><p>e</p>', 'extractContents');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
range.deleteContents();
assert(template.innerHTML === '<p>a</p><p>e</p>', 'extractContents');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneContents());
assert(template.innerHTML === '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>', 'extractContents');
assert(node.toString() === '<p>b</p><p>c</p><p>d</p>', 'append cloned content');

assert(document.importNode(node, true).toString() === '<p>b</p><p>c</p><p>d</p>', 'importNode');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(template.content.firstChild);
range.setEndAfter(template.content.lastChild);
range.deleteContents();
assert(template.innerHTML === '<p>a</p>', 'deleteContents startafter endafter');


template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(template.content.firstChild);
range.setEndBefore(template.content.lastChild);
range.deleteContents();
assert(template.innerHTML === '<p>a</p><p>e</p>', 'deleteContents startafter endbefore');

range = document.createRange();
range.selectNode(document.createTextNode('!'));
let h1 = document.createElement('h1');
range.surroundContents(h1);
assert(h1.toString() === '<h1>!</h1>', 'surroundContents');

range = document.createRange();
range.selectNode(h1.firstChild);
range.insertNode(document.createTextNode('?'));
assert(h1.toString() === '<h1>?!</h1>', 'insertNode');

let event = document.createEvent('Event');
event.initEvent('test-event');

let customEvent = document.createEvent('CustomEvent');
customEvent.initCustomEvent('test-custom-event', false, false, 123);

let treeWalker = document.createTreeWalker(node);
assert(treeWalker.nextNode() === node.childNodes[0], 'first treeWalker');
assert(treeWalker.nextNode() === node.childNodes[0].childNodes[0], 'second treeWalker');
assert(treeWalker.nextNode() === node.childNodes[1], 'third treeWalker');
assert(treeWalker.nextNode() === node.childNodes[1].childNodes[0], 'fourth treeWalker');
assert(treeWalker.nextNode() === node.childNodes[2], 'fifth treeWalker');
assert(treeWalker.nextNode() === node.childNodes[2].childNodes[0], 'sixth treeWalker');
assert(treeWalker.nextNode() === null, 'end of treeWalker');

treeWalker = document.createTreeWalker(node, 128);
assert(treeWalker.nextNode() === null, 'no comments for treeWalker');

treeWalker = document.createTreeWalker(node, 7357);
assert(treeWalker.nextNode() === null, 'no fancy numbers for treeWalker');

treeWalker = document.createTreeWalker(node, 1);
assert(treeWalker.nextNode() === node.childNodes[0], 'first treeWalker');
assert(treeWalker.nextNode() === node.childNodes[1], 'second treeWalker');
assert(treeWalker.nextNode() === node.childNodes[2], 'third treeWalker');
assert(treeWalker.nextNode() === null, 'end of treeWalker');

node.appendChild(document.createComment('ok'));

treeWalker = document.createTreeWalker(node, 128);
assert(treeWalker.nextNode() === node.lastChild, 'yes comments for treeWalker');
assert(treeWalker.nextNode() === null, 'end of treeWalker');

assert(node.childNodes[1].previousSibling === node.childNodes[0], 'previousSibling element');
assert(node.childNodes[0].previousSibling === null, 'previousSibling nope');

node = document.createElement('div');
assert(node.style.cssText === '', 'empty style');
node.style.cssText = 'background-color: blue';
assert(node.style.backgroundColor === 'blue', 'style getter');
assert(node.style.toString() === 'background-color:blue', 'cssText setter');
assert([...node.style].join(',') === 'background-color', 'iterable');
assert(node.style.length === 1, 'style.length');
assert(node.style[0] === 'background-color', 'style[0]');
node.getAttributeNode('style').value = 'color: red';
assert(node.style.toString() === 'color:red', 'cssText indirect setter');
let style = document.createAttribute('style');
node.setAttributeNode(style);
assert(node.toString() === '<div></div>', 'cssText cleanup');
node.style.backgroundColor = 'green';
assert(node.toString() === '<div style="background-color:green"></div>', 'cssText indirect property');
node.removeAttributeNode(style);
node.style.color = 'green';
assert(node.toString() === '<div style="color:green"></div>', 'cssText indirect setter again');

node.style.color = null;
assert(node.toString() === '<div></div>', 'setter as null');
node.id = '';
node.className = '';
assert(node.toString() === '<div></div>', 'setter as null');

node = document.createElement('div');
node.setAttribute('test', 'value');
let {attributes} = node;
let attr = node.getAttributeNode('test');
assert(attributes.getNamedItem('test') === node.getAttributeNode('test'), 'NamedMap.getNamedItem');
attributes.removeNamedItem('test');
assert(!node.hasAttribute('test'), 'NamedMap.removeNamedItem');
attributes.setNamedItem(attr);
assert(attributes.getNamedItem('test') === node.getAttributeNode('test'), 'NamedMap.setNamedItem');
assert(attributes.length === 1, 'NamedMap.length');
assert(attributes.item(0) === attr, 'NamedMap.item');
assert(attributes.item(10) === null, 'NamedMap.item');

node.append('a', 'b', 'c');
assert(node.childNodes[1].wholeText === 'abc', 'Text.wholeText');

const {
  customElements,
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
} = document.defaultView;

class CE extends HTMLElement {}

customElements.whenDefined('c-e').then(Class => {
  assert(Class === CE, 'c-e defined, and class passed along');
});

customElements.whenDefined('c-e').then(Class => {
  assert(Class === customElements.get('c-e'), 'c-e defined and available as get()');
});

try {
  new CE;
  assert(false, 'Custom Elements cannot be initialized before being registered');
}
catch (ok) {}

customElements.define('c-e', CE);
assert(customElements.get('c-e') === CE, 'correctly defined');

try {
  customElements.define('c-e', class extends HTMLElement {});
  assert(false, 'if a name has been taken, it cannot be redefined');
}
catch (OK) {}

try {
  customElements.define('c-e-duplicated', CE);
  assert(false, 'if a class has been taken, it cannot be redefined');
}
catch (OK) {}

let ce = new CE;

assert(ce.tagName === 'C-E', 'Custom Elements can be initialized once registered');
document.documentElement.appendChild(ce);
ce.setAttribute('test', 'value');
ce.removeAttribute('test');

let args = null;
class CEWithAttribute extends HTMLElement {
  static get observedAttributes() { return ['test']; }
  attributeChangedCallback() {
    args = arguments;
  }
}

customElements.define('c-e-w-a', CEWithAttribute);
ce = new CEWithAttribute;

assert(ce.toString() === '<c-e-w-a></c-e-w-a>', 'ce to string works');

ce.setAttribute('test', 'oldValue');
assert(args[0] === 'test', args[1] === null, args[2] === 'oldValue', 'attributeChangedCallback added');

ce.setAttribute('test', 'value');
assert(args[0] === 'test', args[1] === 'oldValue', args[2] === 'value', 'attributeChangedCallback changed');

ce.removeAttribute('test');
assert(args[0] === 'test', args[1] === 'value', args[2] === null, 'attributeChangedCallback removed');

args = null;

ce.setAttribute('test2', 'value');
ce.removeAttribute('test2');

assert(args === null, 'non observed attributes are ... not observed');

customElements.whenDefined('c-e-w-a').then(Class => {
  assert(Class === CEWithAttribute, 'c-e-w-a defined, and class passed along');
});

ce = document.createElement('already-live');
document.documentElement.appendChild(ce);

customElements.define('already-live', class extends HTMLElement {
  connectedCallback() {
    args = 'connected';
  }
  disconnectedCallback() {
    args = 'disconnected';
  }
});

assert(args === 'connected', 'connectedCallback for already-live worked');

ce.remove();
assert(args === 'disconnected', 'disconnectedCallback for already-live worked');

document.documentElement.appendChild(document.createElement('template', {is: 'custom-template'}));

args = [];
customElements.define('custom-template', class extends HTMLTemplateElement {
  connectedCallback() {
    args.push(this);
  }
}, {extends: 'template'});

ce = document.createElement('template', {is: 'custom-template'});
assert(ce.toString() === '<template is="custom-template"></template>', 'builtin extends work');

assert(args.length === 1 && args.pop() === document.documentElement.lastChild, 'builtin connected');

customElements.upgrade(ce);

document.documentElement.insertBefore(ce, document.documentElement.lastChild);
assert(args.length === 1 && args.pop() === ce, 'connectedCallback via insertBefore');

node = document.createDocumentFragment();
node.appendChild(ce);

document.documentElement.insertBefore(node, document.documentElement.lastChild);
assert(args.length === 1 && args.pop() === ce, 'connectedCallback via insertBefore and fragment');

const TemplateExtend = customElements.get('custom-template');
assert((new TemplateExtend).toString() === '<template is="custom-template"></template>', 'builtin extends work');

assert(HTMLElement.observedAttributes.length === 0, 'default observedAttributes has length 0');

args = [];
customElements.define('outer-test', class extends HTMLElement {
  connectedCallback() {
    args.push('connected: ' + this.localName);
  }
  disconnectedCallback() {
    args.push('disconnected: ' + this.localName);
  }
});

customElements.define('inner-test', class extends HTMLElement {
  connectedCallback() {
    args.push('connected: ' + this.localName);
  }
  disconnectedCallback() {
    args.push('disconnected: ' + this.localName);
  }
});

var outer = document.createElement('outer-test');

outer.innerHTML = '<div>OK<inner-test>OK</inner-test>OK<inner-test>OK</inner-test>OK</div><inner-test>OK</inner-test>';
document.documentElement.appendChild(outer);

assert(args.splice(0).join(',') === 'connected: outer-test,connected: inner-test,connected: inner-test,connected: inner-test', 'inner elements get connected too');

outer.remove();

assert(args.splice(0).join(',') === 'disconnected: outer-test,disconnected: inner-test,disconnected: inner-test,disconnected: inner-test', 'inner elements get disconnected too');

outer.remove();
assert(args.length === 0, 'should not trigger disconnected again');

customElements.define('inner-button', class extends HTMLButtonElement {
  static get observedAttributes() { return ['test']; }
  attributeChangedCallback(name, oldValue, newValue) {
    args.push(name, oldValue, newValue);
  }
  connectedCallback() {
    args.push('connected: ' + this.localName + '[is="' + this.getAttribute('is') + '"]');
  }
  disconnectedCallback() {
    args.push('disconnected: ' + this.localName);
  }
}, {extends: 'button'});

outer.innerHTML = '<div><button test="123" is="inner-button">OK</button></div>';

assert(JSON.stringify(args.splice(0)) === '["test",null,"123"]', 'attributes get initialized');

document.documentElement.appendChild(outer);

assert(args.splice(0).join(',') === 'connected: outer-test,connected: button[is="inner-button"]', 'inner builtin elements get connected too');
assert(outer.querySelector('button').toString() === '<button is="inner-button" test="123">OK</button>', 'button with the correct content');



node = document.createElement('script');
assert(node.textContent === '', 'empty textOnly works');
node.appendChild(document.createComment('test'));
assert(node.textContent === '<!--test-->', 'expected text only content');
assert(node.toString() === '<script><!--test--></script>', 'correct toString');
node.textContent = '';
node.appendChild(document.createTextNode('<OK>'));
assert(node.innerHTML === '<OK>', 'expected innerHTML as textOnly');
node.innerHTML = '<OK>';
assert(node.toString() === '<script><OK></script>', 'text only is broken');

const js = `
function test() {
  return html\`<div>${'hello'}</div>\`;
}
`;
node.textContent = js;
assert(node.toString() === `<script>${js}</script>`, 'complex content is right');

node = document.createElement('div');
node.innerHTML = '<p>!</p>';
node.insertAdjacentHTML('beforebegin', 'beforebegin');
node.insertAdjacentHTML('afterend', 'afterend');
assert(node.toString() === '<div><p>!</p></div>', 'no element, no before/after');
node.firstElementChild.insertAdjacentHTML('beforebegin', 'beforebegin');
assert(node.toString() === '<div>beforebegin<p>!</p></div>', 'beforebegin works');
node.firstElementChild.insertAdjacentHTML('afterbegin', 'afterbegin');
assert(node.toString() === '<div>beforebegin<p>afterbegin!</p></div>', 'afterbegin works');
node.firstElementChild.insertAdjacentHTML('beforeend', 'beforeend');
assert(node.toString() === '<div>beforebegin<p>afterbegin!beforeend</p></div>', 'beforeend works');
node.firstElementChild.insertAdjacentHTML('afterend', 'afterend');
assert(node.toString() === '<div>beforebegin<p>afterbegin!beforeend</p>afterend</div>', 'afterend works');

node.firstElementChild.insertAdjacentText('afterend', '<OK>');
assert(node.toString() === '<div>beforebegin<p>afterbegin!beforeend</p>&lt;OK&gt;afterend</div>', 'insertAdjacentText works');

args = null;
node.addEventListener('click', {
  handleEvent(event) {
    args = event;
  }
});
node.dispatchEvent(new Event('click'));
assert(args.type === 'click', 'handleEvent works');

node.replaceChildren();
assert(node.contentEditable === false, 'boolean attributes as false');
node.contentEditable = true;
assert(node.toString() === '<div contenteditable></div>', 'boolean attributes as layout');
node.contentEditable = false;
assert(node.toString() === '<div></div>', 'boolean attributes when false');
assert(node.tabIndex === -1, 'numeric attributes when absent');
node.tabIndex = 1;
assert(node.toString() === '<div tabindex="1"></div>', 'numeric attributes when specified');
assert(node.tabIndex === 1);
node.removeAttribute('tabindex');
assert(node.accessKey === '', 'string attributes when absent');
node.accessKey = 'enter';
assert(node.toString() === '<div accesskey="enter"></div>', 'string attributes when specified');
node.removeAttribute('accesskey');
assert(node.onabort === null, 'DOM Level 0 events empty');
node.onabort = event => { args = event; };
assert(typeof node.onabort === 'function', 'DOM Level 0 events set');
node.dispatchEvent(new Event('abort'));
assert(args.type === 'abort', 'DOM Level 0 events triggered');
node.onabort = null;
assert(node.onabort === null, 'DOM Level 0 events removed');
args = null;
node.dispatchEvent(new Event('abort'));
assert(args === null, 'DOM Level 0 events nope');


const {voidElements} = document._mime;
[
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
].forEach(Class => {
  const element = new Class(document);
  const string = new Class(document).toString();
  const {localName} = element;
  assert(
    voidElements.test(localName) ?
      (string === `<${localName}>`) :
      (string === `<${localName}></${localName}>`),
    'unexpected string representation'
  );
});

[
  HTMLButtonElement,
  HTMLInputElement,
  HTMLTextAreaElement
].forEach(Class => {
  const element = new Class(document);
  assert(element.disabled === false, 'starting as not disabled');
  element.disabled = true;
  assert(element.hasAttribute('disabled') === true, 'setting disabled true');
  element.disabled = false;
  assert(element.hasAttribute('disabled') === false, 'setting disabled false');
});


// Issues //

let {document: doc} = parseHTML('');
doc.head.innerHTML = `<script csp-hash="any"></script>`;
assert(doc.toString() === '<!DOCTYPE html><html><head><script csp-hash="any"></script></head></html>', 'Issue #1');

let newDoc = doc.cloneNode(true);
assert(newDoc._customElements === doc._customElements, 'shared custom elements');
assert(newDoc.defaultView.document === newDoc, 'defaultView.document as circular reference');
let {window} = newDoc.defaultView;
assert(window === window.window, 'defaultView.window as circular reference');

let {MutationObserver} = window;
let observer = new MutationObserver(records => {
  args = records;
});

let notObserved = newDoc.documentElement.appendChild(
  newDoc.createElement('not-observed')
);

let observed = newDoc.documentElement.appendChild(
  newDoc.createElement('observed')
);

observer.observe(observed, {
  attributes: true,
  attributeFilter: ['first']
});

observed.setAttribute('first', 123);
observed.setAttribute('second', 456);
assert(args === null, 'MutationObserver is asynchronous');
assert(JSON.stringify(observer._records) === '[{"type":"attributes","attributeName":"first"}]', 'MutationObserver attributes');

await milliseconds(10);

assert(JSON.stringify(args) === '[{"type":"attributes","attributeName":"first"}]', 'MutationObserver attributes');
args = null;
observer.disconnect();
observed.setAttribute('first', 456);
assert(JSON.stringify(observer.takeRecords()) === '[]', 'MutationObserver disconnected');

// observe them all
observer.observe(observed, {
  attributeOldValue: true
});

observed.setAttribute('first', 789);
observed.setAttribute('second', 1);

await milliseconds(10);

assert(JSON.stringify(args) === '[{"type":"attributes","attributeName":"first","oldValue":"456"},{"type":"attributes","attributeName":"second","oldValue":"456"}]', 'MutationObserver attributes');

args = null;
notObserved.setAttribute('first', 'nope');

await milliseconds(10);
assert(args === null, 'MutationObserver not observing did not trigger generic node');



})();
