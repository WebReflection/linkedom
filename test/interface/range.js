const assert = require('../assert.js').for('Range');

const {parseHTML, DOMParser} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div class="test">abc</div></html>');

let node = document.getElementsByClassName('test')[0];

let element = document.createElement('element');

let range = document.createRange();
element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneRange().extractContents());
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append extracted content');
assert(element.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
range.deleteContents();
assert(element.innerHTML, '<p>a</p><p>e</p>', 'extractContents');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartBefore(element.childNodes[1]);
range.setEndAfter(element.childNodes[3]);
node.replaceChildren();
node.appendChild(range.cloneContents());
assert(element.innerHTML, '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>', 'extractContents');
assert(node.toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'append cloned content');

assert(document.importNode(node, true).toString(), '<div class="test"><p>b</p><p>c</p><p>d</p></div>', 'importNode');

element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(element.firstChild);
range.setEndAfter(element.lastChild);
range.deleteContents();
assert(element.innerHTML, '<p>a</p>', 'deleteContents startafter endafter');


element.innerHTML = '<p>a</p><p>b</p><p>c</p><p>d</p><p>e</p>';
range = document.createRange();
range.setStartAfter(element.firstChild);
range.setEndBefore(element.lastChild);
range.deleteContents();
assert(element.innerHTML, '<p>a</p><p>e</p>', 'deleteContents startafter endbefore');

range = document.createRange();
range.selectNode(document.createTextNode('!'));
let h1 = document.createElement('h1');
range.surroundContents(h1);
assert(h1.toString(), '<h1>!</h1>', 'surroundContents');

range = document.createRange();
range.selectNode(h1.firstChild);
range.insertNode(document.createTextNode('?'));
assert(h1.toString(), '<h1>?!</h1>', 'insertNode');

range = document.createRange();
let contestual = range.createContextualFragment('<div>hi</div>');
assert(contestual.toString(), '<#document-fragment><div>hi</div></#document-fragment>', 'createContextualFragment');

range = document.createRange();
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
range.selectNodeContents(svg);
const rect = range.createContextualFragment('<rect />').childNodes[0];
assert('ownerSVGElement' in rect, true, 'createContextualFragment(SVG)');

{
  const svgDocument = (new DOMParser).parseFromString('<!doctype svg><svg></svg>', 'image/svg+xml');
  
  let range = svgDocument.createRange();
  let contextual = range.createContextualFragment('<div>hi</div>');
  assert(contextual.toString(), '<#document-fragment><div>hi</div></#document-fragment>', 'createContextualFragment');
}
