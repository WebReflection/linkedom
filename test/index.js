const {CustomEvent, DOMParser, XMLDocument} = require('../cjs');

const assert = (expression, message) => {
  console.assert(expression, message);
  if (!expression)
    process.exit(1);
};

const svgDocument = (new DOMParser).parseFromString('<svg><rect /></svg>', 'image/svg+xml');
let xmlDocument = (new DOMParser).parseFromString('<svg><rect /></svg>', 'text/xml');
assert(xmlDocument.toString() === '<?xml version="1.0" encoding="utf-8"?><svg><rect /></svg>', 'xml toString');

svgDocument.root = svgDocument.createElement('Svg');
assert(svgDocument.root.tagName === 'Svg', 'XML names are case-sensitive');

xmlDocument = new XMLDocument;
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

let document = (new DOMParser).parseFromString('', 'text/html');
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

document.documentElement.id = 'html';
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

document.documentElement.innerHTML = '<div /><input><p />';
assert(document.toString() === '<!DOCTYPE html><html><div></div><input><p></p></html>', 'innerHTML + sanitizer');

document.documentElement.setAttribute('lang', 'en');
assert(document.documentElement.cloneNode(true).outerHTML === '<html lang="en"><div></div><input><p></p></html>', 'cloneNode(true).outerHTML');
assert(document.documentElement.cloneNode(false).outerHTML === '<html lang="en"></html>', 'cloneNode().outerHTML');

document.documentElement.append('a', 'b');
let {length} = document.documentElement.childNodes;
document.documentElement.normalize();
assert(document.documentElement.childNodes.length === (length - 1), 'normalize merged text nodes');

let node = document.getElementsByTagName('div')[0];

node.before('before');
node.after('after');
assert(document.toString() === '<!DOCTYPE html><html lang="en">before<div></div>after<input><p></p>ab</html>', '.before() and after()');

node.replaceWith(document.createTextNode('&'));
assert(document.toString() === '<!DOCTYPE html><html lang="en">before&amp;after<input><p></p>ab</html>', '.before() and after()');

assert(document.createElement('button', {is: 'special-case'}).getAttribute('is') === 'special-case', 'createElement with extra options');

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
node.innerHTML = '<!--comment--><input type="password" />OK';
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
