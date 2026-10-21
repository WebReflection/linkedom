const assert = require('../assert.js').for('HTMLStyleElement');

const {parseHTML} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<style></style>');

let {firstElementChild: style} = document;

assert(style.toString(), '<style></style>');
assert(style.sheet != null, true, 'style.sheet');

assert(style.innerHTML, '', 'style.innerHTML');
assert(style.innerText, '', 'style.innerText');
assert(style.textContent, '', 'style.textContent');

style.innerHTML = '.test { color: white; font-size: 12px; }';
assert(style.innerHTML, '.test { color: white; font-size: 12px; }', 'style.innerHTML');

style.innerText = '.test { color: white; font-size: 12px; }';
assert(style.innerText, '.test { color: white; font-size: 12px; }', 'style.innerText');

style.textContent = '.test { color: white; font-size: 12px; }';
assert(style.textContent, '.test { color: white; font-size: 12px; }', 'style.textContent');

assert(style.toString(), '<style>.test { color: white; font-size: 12px; }</style>');
assert(style.sheet.cssRules.length === 1, true, 'style.sheet.cssRules.length');

assert(style.sheet.cssRules[0].selectorText, '.test');
assert(style.sheet.cssRules[0].style.color, 'white');
assert(style.sheet.cssRules[0].style['font-size'], '12px');

document = parseHTML('<style>.parent { color: blue; .child { color: red; }}</style>').document;

({firstElementChild: style} = document);
assert(style.sheet.cssRules.length, 1);
assert(style.sheet.cssRules[0].selectorText, '.parent');
assert(style.sheet.cssRules[0].style.color, 'blue');
assert(style.sheet.cssRules[0].cssRules.length, 1);
assert(style.sheet.cssRules[0].cssRules[0].selectorText, '& .child');
assert(style.sheet.cssRules[0].cssRules[0].style.color, 'red');
