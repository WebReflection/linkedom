const {HTMLDocument, SVGDocument, XMLDocument} = require('../cjs');

let document = new HTMLDocument;

console.assert(document.toString() === '<!DOCTYPE html>', 'correct doctype');

let root = document.createElement('html', {is: 'fake-news'});
let html = root.appendChild(document.createElement('html'));

console.assert(root.getAttribute('is') === 'fake-news', 'options is works');
console.assert(!root.classList.contains('nope'), 'empty classList is empty');
root.classList.remove('nope');
root.classList.add('nope');
console.assert(root.classList.contains('nope'), 'classList is not empty');
root.classList.add('nope');
console.assert(root.getAttribute('class') === 'nope', 'classList is correct');
root.classList.remove('nope');

console.assert(!html.hasAttribute('lang'), 'lang attribute absent');

html.setAttribute('lang', 'en');
console.assert(html.hasAttribute('lang'), 'lang attribute set');
console.assert(html.getAttribute('lang') === 'en', 'lang attribute correct');
let lang = html.getAttributeNode('lang');
html.setAttributeNode(lang);
html.removeAttribute('lang');
console.assert(!html.hasAttribute('lang'), 'removeAttribute works');
html.setAttributeNode(lang);
console.assert(html.hasAttribute('lang'), 'setAttributeNode works');

let attr = document.createAttribute('contenteditable');
html.setAttributeNode(attr);

console.assert(html.lastChild == null, 'html has no nodes');

document.root = html;
console.assert(document.root === html, 'document.root works');
console.assert(html.parentNode === document, 'document.root set parent');
document.root = null;
console.assert(document.root == null, 'document.root can be empty');
document.root = null;
console.assert(document.root == null, 'document.root is still empty');
try {
  document.root = {shena: 'nigan'};
  process.exit(1);
}
catch (expected) {}
document.root = html;

console.assert(document.toString() === '<!DOCTYPE html><html contenteditable lang="en"></html>', 'correct html render');

let head = document.createElement('head');
let body = document.createElement('body');
let fragment = document.createDocumentFragment();
fragment.append(head, body);

body.id = 'da-body';
console.assert(fragment.firstChild == head, 'fragment has a head');
console.assert(fragment.lastChild == body, 'fragment has a body');

html.append(fragment);
console.assert(document.toString() === `<!DOCTYPE html><html contenteditable lang="en"><head></head><body id="da-body"></body></html>`, 'document looks OK');
console.assert(html.firstChild == head, 'html has a head');
console.assert(html.lastChild == body, 'html has a body');
console.assert(fragment.firstChild == null && fragment.lastChild == null, 'fragment has no nodes');

body.appendChild(document.createTextNode('Hello Flat World'));
console.assert(body.toString() === `<body id="da-body">Hello Flat World</body>`, 'body has text nodes');

body.appendChild(document.createComment('comment'));
console.assert(body.toString() === `<body id="da-body">Hello Flat World<!--comment--></body>`, 'body has comments nodes');

console.assert(document.getElementsByTagName('body')[0] === body, 'getElementsByTagName("body")');
console.assert(document.ignoreCase, 'html has ignoreCase true by default');
document.ignoreCase = true;
console.assert(document.getElementsByTagName('nope').length === 0, 'getElementsByTagName("nope")');
console.assert(document.getElementsByClassName('nope').length === 0, 'getElementsByClassName("nope")');

try {
  body.appendChild({shena: 'nigan'});
  process.exit(1);
}
catch (expected) {}

let input = document.createElement('input');
body.appendChild(input).void = true;
console.assert(body.toString() === `<body id="da-body">Hello Flat World<!--comment--><input /></body>`, 'body has void nodes');

console.assert(document.getElementById('da-body') === body, 'getElementById("da-body")');
console.assert(document.getElementById('nope') == null, 'getElementById("nope")');
body.classList.add('yup');
document.ignoreCase = false;
console.assert(document.getElementsByClassName('yup').length === 1, 'getElementsByClassName("yup")');

let p = document.createElement('p');
let text = document.createTextNode('text');
let div = document.createElement('div');

console.assert(!div.hasChildNodes(), 'hasChildNodes returns false when no nodes are found');
console.assert(div.ownerDocument === document, 'ownerDocument is present on non live nodes');

fragment.append(p, text);
div.append(fragment);
console.assert(fragment.parentNode === null, 'fragments never have a parent');
console.assert(p.parentNode === div && text.parentNode === div, 'correct parentNode');
console.assert(div.children.length === 1 && div.children[0] === p, 'no element are considered in children');
console.assert(div.lastChild === text, 'correct lastChild');

document.createElement('div').append(p, text);
console.assert(p.parentNode !== div && text.parentNode !== div, 'correct new parentNode');

console.assert(div.getAttributeNode('b') === null, 'getAttributeNode without node works');

try {
  div.setAttributeNode({key: 'value'});
  process.exit(1);
}
catch (expected) {}

div.setAttribute('a', 'a');
div.setAttribute('b', 'b');
div.setAttribute('c', 'c');
console.assert(div.getAttributeNode('b').value === 'b', 'getAttributeNode works');

div.removeAttribute('b');
console.assert(!div.hasAttribute('b'), 'hasAttribute works');

try {
  div.insertBefore(document.createComment('nope'), document.createElement('nope'));
  process.exit(1);
}
catch (expected) {}

try {
  div.removeChild(document.createElement('nope'));
  process.exit(1);
}
catch (expected) {}

div.appendChild(document.createElement('p'));

div.insertBefore(div.firstChild);
console.assert(div.toString() === '<div c="c" a="a"><p></p></div>', 'moving nodes around works');

// TODO: this is broken
// div.insertBefore(document.createElement('el'), div.firstChild);
// console.log(div.toString());

/*
div.lastChild.next = {};
try {
  div.toString();
  process.exit(1);
}
catch (expected) {}
*/

// end
document = new HTMLDocument;
console.assert(document.head, 'auto head works as expected');
console.assert(document.body, 'auto body works as expected');
console.assert(document.documentElement, 'auto body works as expected');
console.assert(document.head, 'auto head works as expected');
console.assert(document.body, 'auto body works as expected');
console.assert(document.documentElement, 'auto body works as expected');

document = new XMLDocument;
console.assert(!document.ignoreCase, 'xml constructor works as expected');

document = new SVGDocument;
console.assert(!document.ignoreCase, 'svg constructor works as expected');
console.assert(document.getElementsByTagName('svg')[0] === document.root);
