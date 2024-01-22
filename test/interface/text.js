const assert = require('../assert.js').for('Text');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div></div></html>');

let node = document.querySelector('div');

let text = document.createTextNode('text');
node.innerHTML = '<p></p>';
document.documentElement.appendChild(node);
text.before(node.firstChild);
text.after(node.firstChild);
assert(node.toString(), '<div><p></p></div>', 'before after not affected');
node.firstChild.textContent = '<test>';
assert(node.toString(), '<div><p>&lt;test&gt;</p></div>', 'before after not affected');
node.firstChild.textContent = '';
assert(node.firstChild.childNodes.length, 0, 'there should be no leftovers when clearing content with textContent=""')
assert(node.firstChild.firstChild, null, 'textContent empty string clears children')
assert(node.firstChild.textContent, '', 'textContent was set empty string')
assert(node.toString(), '<div><p></p></div>', 'before after not affected');
node.firstChild.textContent = '0';
assert(node.firstChild.firstChild.nodeValue, '0', 'zero as nodeValue')
assert(node.toString(), '<div><p>0</p></div>', 'zero as text');
node.firstChild.textContent = null;
assert(node.firstChild.firstChild, null, 'textContent null clears all children and keeps childNodes empty')
assert(node.toString(), '<div><p></p></div>', 'null clears all children but does not set node');
node.firstChild.textContent = '';
assert(node.firstChild.childNodes.length, 0, 'there should be no leftovers when clearing content with textContent=""')
assert(node.firstChild.firstChild, null, 'textContent empty string clears children')
assert(node.firstChild.textContent, '', 'textContent was set empty string')
assert(node.toString(), '<div><p></p></div>', 'empty text node as text');
node.firstChild.textContent = undefined;
assert(node.firstChild.firstChild, null, 'textContent undefined clears all children and keeps childNodes empty')
assert(node.toString(), '<div><p></p></div>', 'undefined clears all children but does not set node');
assert(text.isConnected, false, '!isConnected');
assert(text.parentElement, null, '!parentElement');
assert(node.contains(text), false, '!contains');
node.firstChild.appendChild(text);
assert(text.getRootNode(), document, 'getRootNode as document');
assert(node.contains(text), true, 'contains');
assert(text.isConnected, true, 'isConnected');
assert(text.parentElement, node.firstChild, 'parentElement');
document.documentElement.cloneNode(true);
assert(node.toString(), '<div><p>text</p></div>', 'appended');
text.replaceWith(document.createComment('comment'));
assert(text.isConnected, false, '!isConnected');
assert(node.toString(), '<div><p><!--comment--></p></div>', 'replaceWith');
document.documentElement.cloneNode(true);
node.firstChild.firstChild.cloneNode(true);
node.firstChild.firstChild.cloneNode();
assert(node.firstChild.closest('p'), node.firstChild, 'closest(sameNode)');
assert(node.firstChild.closest(':scope'), node.firstChild, 'closest(:scope)');
assert(node.firstChild.closest('nope'), null, 'closest(nope)');
assert(!node.firstChild.firstChild.isEqualNode(text), true, 'isEqualNode');
assert(node.firstChild.firstChild.isEqualNode(node.firstChild.firstChild.cloneNode(true)), true, 'isEqualNode');
node.firstChild.removeChild(node.firstChild.firstChild);
assert(node.isEqualNode(node.cloneNode(true)), true, 'isEqualNode');
assert(node.toString(), '<div><p></p></div>', 'remove');
assert(text.isEqualNode(text.cloneNode(true)), true, 'isEqualNode');
assert(text.isSameNode(text), true, 'isSameNode');
assert(text.nodeValue, text.textContent, 'nodeValue');
assert(text.data, text.textContent, 'data');
assert(text.firstChild, null, 'firstChild');
assert(text.lastChild, null, 'lastChild');
assert(text.nextSibling, null, 'nextSibling');
assert(text.previousSibling, null, 'previousSibling');
assert(text.nextElementSibling, null, 'nextElementSibling');
assert(text.previousElementSibling, null, 'previousElementSibling');
text.normalize();
assert(node.hasChildNodes(), true, 'hasChildNodes');
assert(text.hasChildNodes(), false, '!hasChildNodes');
assert(text.getRootNode(), text, 'getRootNode as text');
assert(document.documentElement.parentElement, null, 'html.parentElement');
document.documentElement.insertBefore(text, null);
assert(document.documentElement.lastChild, text, 'insertBefore(node, null)');
node = document.createDocumentFragment();
node.prepend('a', document.createTextNode('b'), 'c');
assert(node.firstChild.nextElementSibling, null, 'nextElementSibling with text around');
assert(document.documentElement.insertBefore(node, node), node, 'insertBefore(node, node) works');
document.documentElement.insertBefore(node, text);
node.append('a', '');
node.normalize();
assert(node.childNodes.length, 1, 'normalize() empty text');
assert(text.nodeValue, 'text');
text.nodeValue = '';
assert(text.nodeValue, '');
text.nodeValue = '0'
assert(text.nodeValue, '0');
text.nodeValue = '';
assert(text.nodeValue, '');
