const {DOMParser, HTMLDocument, SVGDocument, XMLDocument} = require('../cjs');

const assert = (expression, message) => {
  console.assert(expression, message);
  if (!expression)
    process.exit(1);
};

const svgDocument = new SVGDocument;
const xmlDocument = new XMLDocument;

svgDocument.root = svgDocument.createElement('Svg');
assert(svgDocument.root.tagName === 'Svg', 'XML names are case-sensitive');

let document = new HTMLDocument;
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

process.exit(0);


// OLD TESTS
const fragment = document.createDocumentFragment();
const div = document.createElement('div');

div.setAttribute('test', 'value');
div.setAttribute('other', 'value');
div.setAttribute('test', 'new');

console.log('matches', div.matches('[test]'));

const p = document.createElement('p');
p.appendChild(document.createTextNode('OK'));
p.classList.add('a', 'b');

div.append(
  'Test',
  p,
  document.createElement('input')
);

console.log('isConnected', div.isConnected, 'contains', document.documentElement.contains(div));
document.documentElement.appendChild(div);
console.log('isConnected', div.isConnected, 'contains', document.documentElement.contains(div));

console.log(document.toString());
console.log('');

console.log(div.innerHTML);
console.log('');

console.log(div.tagName);
console.log('');

console.log(div.childNodes.join('\n'));
console.log('');

console.log(div.children.join('\n'));
console.log('');

console.log(div.attributes.join('\n'));
console.log('');

console.log(p.previousSibling.localName);

const ps = [
  document.createElement('span').appendChild(document.createTextNode('a')).parentNode,
  document.createElement('span').appendChild(document.createTextNode('b')).parentNode,
  document.createElement('span').appendChild(document.createTextNode('c')).parentNode,
  document.createElement('span').appendChild(document.createTextNode('d')).parentNode
];

fragment.prepend(...ps);
console.log(fragment.localName, fragment.children.length, fragment.firstChild === ps[0], fragment.lastChild === ps[3]);
console.log('');

fragment.replaceChild(document.createElement('br'), fragment.lastChild);

p.appendChild(fragment);
console.log(div.toString());

console.log(fragment.localName, fragment.children.length, fragment.firstChild === ps[0], fragment.lastChild === ps[3]);

fragment.replaceChildren(...ps);
