const assert = require('../assert.js').for('CSSStyleDeclaration');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('');

let node = document.createElement('div');
assert(node.style.cssText, '', 'empty style');
node.style.cssText = 'background-color: blue';
assert(node.style.backgroundColor, 'blue', 'style getter');
assert(node.style.toString(), 'background-color:blue', 'cssText setter');
assert([...node.style].join(','), 'background-color', 'iterable');
assert(node.style.length, 1, 'style.length');
assert(node.style[0], 'background-color', 'style[0]');
node.getAttributeNode('style').value = 'color: red';
assert(node.style.toString(), 'color:red', 'cssText indirect setter');
let style = document.createAttribute('style');
node.setAttributeNode(style);
assert(node.toString(), '<div></div>', 'cssText cleanup');
node.style.backgroundColor = 'green';
assert(node.toString(), '<div style="background-color:green"></div>', 'cssText indirect property');
node.removeAttributeNode(style);
node.style.color = 'green';
assert(node.toString(), '<div style="color:green"></div>', 'cssText indirect setter again');

node.style.color = null;
assert(node.toString(), '<div></div>', 'setter as null');
node.id = '';
node.className = '';
assert(node.toString(), '<div></div>', 'setter as null');

node.style.setProperty('background-color', 'purple');
assert(node.toString(), '<div style="background-color:purple"></div>', 'setProperty');
assert(node.style.getPropertyValue('background-color'), 'purple', 'getPropertyValue');
node.style.removeProperty('background-color')
assert(node.toString(), '<div></div>', 'removeProperty');
