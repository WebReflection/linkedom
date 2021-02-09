const assert = require('../assert.js').for('Range');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div class="test">abc</div></html>');

let node = document.getElementsByClassName('test')[0];

let template = document.createElement('template');
template.innerHTML = '<p>template</p>';
assert(template.content, template.content, 'template.content');
assert(template.innerHTML, '<p>template</p>', 'template.innerHTML');
document.documentElement.appendChild(template.content);
assert(template.innerHTML, '', 'empty template.innerHTML');

let range = document.createRange();
template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneRange().extractContents());
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append extracted content');
assert(template.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
range.deleteContents();
assert(template.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(template.content.childNodes[1]);
range.setEndAfter(template.content.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneContents());
assert(template.innerHTML, '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>', 'extractContents');
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append cloned content');

assert(document.importNode(node, true).toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'importNode');

template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(template.content.firstChild);
range.setEndAfter(template.content.lastChild);
range.deleteContents();
assert(template.innerHTML, '<p>a</p>', 'deleteContents startafter endafter');


template.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(template.content.firstChild);
range.setEndBefore(template.content.lastChild);
range.deleteContents();
assert(template.innerHTML, '<p>a</p><p>e</p>', 'deleteContents startafter endbefore');

range = document.createRange();
range.selectNode(document.createTextNode('!'));
let h1 = document.createElement('h1');
range.surroundContents(h1);
assert(h1.toString(), '<h1>!</h1>', 'surroundContents');

range = document.createRange();
range.selectNode(h1.firstChild);
range.insertNode(document.createTextNode('?'));
assert(h1.toString(), '<h1>?!</h1>', 'insertNode');
