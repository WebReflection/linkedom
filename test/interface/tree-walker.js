const assert = require('../assert.js').for('TreeWalker');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><p>b</p><p>c</p><p>d</p></html>');

let node = document.createDocumentFragment();
node.append(...document.documentElement.childNodes);

let treeWalker = document.createTreeWalker(node);
assert(treeWalker.nextNode(), node.childNodes[0], 'first treeWalker');
assert(treeWalker.nextNode(), node.childNodes[0].childNodes[0], 'second treeWalker');
assert(treeWalker.nextNode(), node.childNodes[1], 'third treeWalker');
assert(treeWalker.nextNode(), node.childNodes[1].childNodes[0], 'fourth treeWalker');
assert(treeWalker.nextNode(), node.childNodes[2], 'fifth treeWalker');
assert(treeWalker.nextNode(), node.childNodes[2].childNodes[0], 'sixth treeWalker');
assert(treeWalker.nextNode(), null, 'end of treeWalker');

treeWalker = document.createTreeWalker(node, 8);
assert(treeWalker.nextNode(), null, 'no cdata sections for treeWalker');

treeWalker = document.createTreeWalker(node, 128);
assert(treeWalker.nextNode(), null, 'no comments for treeWalker');

treeWalker = document.createNodeIterator(node, 1);
assert(treeWalker.nextNode(), node.childNodes[0], 'first treeWalker again');
assert(treeWalker.nextNode(), node.childNodes[1], 'second treeWalker again');
assert(treeWalker.nextNode(), node.childNodes[2], 'third treeWalker again');
assert(treeWalker.nextNode(), null, 'end of treeWalker');

node.appendChild(document.createComment('ok'));

treeWalker = document.createTreeWalker(node, 128);
assert(treeWalker.nextNode(), node.lastChild, 'yes comments for treeWalker');
assert(treeWalker.nextNode(), null, 'end of treeWalker');

node.appendChild(document.createCDATASection('ok'));

treeWalker = document.createTreeWalker(node, 8);
assert(treeWalker.nextNode(), node.lastChild, 'yes cdata sections for treeWalker');
assert(treeWalker.nextNode(), null, 'end of treeWalker');

treeWalker = document.createTreeWalker(document);
assert(treeWalker.nextNode(), document.documentElement, 'root as document works');

assert(node.childNodes[1].previousSibling, node.childNodes[0], 'previousSibling element');
assert(node.childNodes[0].previousSibling, null, 'previousSibling nope');

node.replaceChildren();
let p = node.appendChild(document.createElement('p'));
p.setAttribute('ghost', '');
p.textContent = 'ok';

treeWalker = document.createTreeWalker(node);
assert(treeWalker.nextNode(), p, 'treewalker p');
p.removeAttribute('ghost');

assert(treeWalker.nextNode(), p.firstChild, 'treewalker p.firstChild');
assert(treeWalker.nextNode(), null, 'end of p treeWalker');
