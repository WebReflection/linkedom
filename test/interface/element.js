const assert = require('../assert.js').for('Text');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div><span></span></div></html>');

let div = document.querySelector('div');

div.firstChild.outerHTML = 'hello';
assert(div.firstChild.toString(), 'hello');

div.innerHTML = '<span>"hi</span>';
assert(div.firstChild.toString(), '<span>"hi</span>');
div.firstChild.outerHTML = '<p>hello</p>';
assert(div.firstChild.toString(), '<p>hello</p>');

div.innerHTML = '<span></span>'
div.firstChild.outerHTML = '<p>hello</p> world';
assert(div.toString(), '<div><p>hello</p> world</div>');