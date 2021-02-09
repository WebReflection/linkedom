const assert = require('../assert.js').for('DocumentFragment');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('');

let node = document.createDocumentFragment();

try {
  node.appendChild(node);
  assert(true, false, 'node should not be appended to itself');
} catch (ok) {}

try {
  node.removeChild(node);
  assert(true, false, 'node should not be removed from itself');
} catch (ok) {}

assert(node.firstChild, null, 'firstChild');
assert(node.lastChild, null, 'lastChild');
assert(node.getElementById('any'), null, 'no element by id');
// duplicated to measure cache
assert(node.querySelector('div[id="any"]'), null, 'no querySelector');
assert(node.querySelector('div[id="any"]'), null, 'no querySelector');
assert(node.querySelectorAll('div[id="any"]').item(0), null, 'no NodeList.item()');
assert(node.querySelectorAll('div[id="any"]').item(0), null, 'no NodeList.item()');
assert(node.children.length, 0, 'no children');
assert(node.childElementCount, 0, 'childElementCount is 0');
node.appendChild(document.createElement('div')).id = 'any';
assert(node.isEqualNode(node.cloneNode(true)), true, 'isEqualNode');
assert(node.isEqualNode({}), false, 'isEqualNode nope');
assert(node.querySelector('div[id="any"]'), node.firstElementChild, 'yes querySelector');
assert(node.querySelectorAll('div[id="any"]').length, 1, 'yes querySelectorAll');
assert(node.querySelectorAll('div[id="any"]').item(0), node.firstElementChild, 'yes NodeList.item()');
assert(node.getElementById('any'), node.firstElementChild, 'element by id');
assert(node.childElementCount, 1, 'childElementCount is 1');
assert(node.children.length, 1, 'children');
assert(node.firstElementChild, node.lastElementChild, 'element child');
node.prepend('a');
node.append('b');
assert(node.toString(), '<#document-fragment>a<div id="any"></div>b</#document-fragment>', 'expected content');
node.replaceChildren('c', 'd');
assert(node.toString(), '<#document-fragment>cd</#document-fragment>', 'expected content');
node.normalize();
assert(node.childNodes.length, 1, 'normalize()');
node.replaceChild(document.createElement('input'), node.firstChild);
assert(node.toString(), '<#document-fragment><input></#document-fragment>', 'expected content');
