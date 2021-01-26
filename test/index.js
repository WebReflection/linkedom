const {DOMParser, XMLDocument} = require('../cjs');

const assert = (expression, message) => {
  console.assert(expression, message);
  if (!expression)
    process.exit(1);
};

const svgDocument = (new DOMParser).parseFromString('<svg><rect /></svg>', 'image/svg+xml');
let xmlDocument = (new DOMParser).parseFromString('<svg><rect /></svg>', 'text/xml');

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
