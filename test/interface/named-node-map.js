const assert = require('../assert.js').for('NamedNodeMap');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document, NamedNodeMap} = parseHTML('<html><div tmp>abc</div></html>');

let node = document.documentElement.firstElementChild;
assert(typeof NamedNodeMap !== 'undefined', true, 'NamedNodeMap undefined in global export');
assert(node.id, '', 'no id');
assert(!node.hasAttribute('id'), true, 'no id');
node.id = 'test';
assert(node.hasAttribute('id'), true, 'yes id');
assert(node.className, '', 'no className');
node.className = ' a b ';
assert(node.className, 'a b', 'yes className');
node.className = null;
assert(node.className, 'null', 'null gets converted to string');
node.className = undefined;
assert(node.className, 'undefined', 'undefined gets converted to string');
node.className = 123;
assert(node.className, '123', 'number as className gets converted to string');
node.className = ' a b ';
assert(node.className, 'a b', 'yes className');
assert(node.nodeName, 'DIV', 'nodeName');
assert(node.tagName, 'DIV', 'tagName');
assert(node.attributes.length, 3, 'attributes');
node.removeAttribute('tmp');
assert(node.attributes.length, 2, 'attributes');
assert(node.attributes.id.value, 'test', 'attributes.id');
assert(node.attributes.class.value, 'a b', 'attributes.class');
assert(node.getAttributeNode('id'), node.attributes.id, 'getAttributeNode');
assert(node.getAttributeNode('nope'), null, 'getAttributeNode');
assert(node.attributes.nope, void 0, 'attributes.nope');
assert(node.nextSibling, null, 'no nextSibling');
assert(node.previousSibling, null, 'no previousSibling');
assert(node.nextElementSibling, null, 'no nextElementSibling');
assert(node.previousElementSibling, null, 'no previousElementSibling');
document.documentElement.append(node, document.createElement('p'));
assert(node.nextElementSibling !== null, true, 'yes nextElementSibling');
assert(node.previousElementSibling, null, 'yes previousElementSibling');

let {class: klass} = node.attributes;
assert(node.hasAttributes(), true, 'hasAttributes');
assert(node.getAttributeNames().join(','), 'class,id', 'getAttributeNames');
assert(klass.isEqualNode(klass.cloneNode(true)), true, 'attribute.isEqualNode()');
assert(klass.firstChild, null, 'attribute.firstChild');
assert(klass.lastChild, null, 'attribute.lastChild');
assert(klass.previousSibling, null, 'attribute.previousSibling');
assert(klass.nextSibling, null, 'attribute.nextSibling');
assert(klass.previousElementSibling, null, 'attribute.previousElementSibling');
assert(klass.nextElementSibling, null, 'attribute.nextElementSibling');
node.removeAttribute('id');
node.removeAttribute('class');
/* TODO: do I even care?
try {
  node.removeAttributeNode(klass);
  assert(true, false, 'removeAttributeNode should have thrown');
}
catch (OK) {}
*/
assert(!node.hasAttributes(), true, 'hasAttributes');
assert(!node.hasAttribute('class'), true, 'removeAttributeNode');
assert(node.className, '', 'removeAttributeNode');
node.setAttributeNode(klass);
assert(node.className, 'a b', 'setAttributeNode');
klass = document.createAttribute('class');
klass.value = 'b c';
node.setAttributeNode(klass);
assert(node.className, 'b c', 'setAttributeNode');
assert(node.matches('[disabled]'), false, 'no matches');
node.toggleAttribute('disabled');
assert(node.toString(), '<div disabled class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', true);
assert(node.toString(), '<div disabled class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', false);
assert(node.toString(), '<div class="b c">abc</div>', 'toggle');
node.toggleAttribute('disabled', false);
node.toggleAttribute('disabled', true);
assert(node.toString(), '<div disabled class="b c">abc</div>', 'toggle');
assert(node.firstChild.previousElementSibling, null, 'previousElementSibling attributes');
assert(node.matches('[disabled]'), true, 'yes matches');
assert(node.matches(':scope[disabled]'), true, ':scope matches');
node.toggleAttribute('disabled');
assert(node.toString(), '<div class="b c">abc</div>', 'toggle');
assert(document.getElementsByClassName('b')[0], node, 'getElementsByClassName');
let index = document.documentElement.childNodes.indexOf(node);
node.outerHTML = '<p id="outer-html"></p>';
assert(document.documentElement.childNodes.indexOf(node) < 0, true, 'outerHTML removed the node');
assert(document.getElementById('outer-html'), document.documentElement.childNodes[index]);
assert(!!document.documentElement.childElementCount, true, 'childElementCount');
document.documentElement.setAttributeNode(klass);
assert(document.documentElement.className, 'b c', 'moved attribute');
