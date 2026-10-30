const assert = require('../assert.js').for('CSSStyleDeclaration');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('');

let node = document.createElement('div');
assert(node.style.cssText, '', 'empty style');
// Per CSSOM, an unset property reads as the empty string, not undefined —
// matching getPropertyValue, which is routed through the same getter.
assert(node.style.color, '', 'unset property getter returns ""');
assert(node.style.getPropertyValue('color'), '', 'unset getPropertyValue returns ""');
node.style.cssText = 'background-color: blue; background-image: url("https://t.co/i.png");';
assert(node.style.backgroundColor, 'blue', 'style getter');
assert(node.style.backgroundImage, 'url("https://t.co/i.png")', 'style value with colon');
assert(node.style.toString(), 'background-color: blue; background-image: url("https://t.co/i.png");', 'cssText setter');
assert([...node.style].join(','), 'background-color,background-image', 'iterable');
assert(node.style.length, 2, 'style.length');
assert(node.style[0], 'background-color', 'style[0]');
node.getAttributeNode('style').value = 'color: red';
assert(node.style.toString(), 'color: red;', 'cssText indirect setter');
let style = document.createAttribute('style');
node.setAttributeNode(style);
assert(node.toString(), '<div></div>', 'cssText cleanup');
node.style.backgroundColor = 'green';
assert(node.toString(), '<div style="background-color: green;"></div>', 'cssText indirect property');
node.removeAttributeNode(style);
node.style.color = 'green';
assert(node.toString(), '<div style="color: green;"></div>', 'cssText indirect setter again');

node.style.color = null;
assert(node.toString(), '<div></div>', 'setter as null');
node.id = '';
node.className = '';
assert(node.toString(), '<div></div>', 'setter as null');

node.style.setProperty('background-color', 'purple');
assert(node.toString(), '<div style="background-color: purple;"></div>', 'setProperty');
assert(node.style.getPropertyValue('background-color'), 'purple', 'getPropertyValue');
node.style.removeProperty('background-color')
assert(node.toString(), '<div></div>', 'removeProperty');

/** @type {HTMLDivElement} */
const divWithStyle = document.createElement('div');
divWithStyle.setAttribute('style', ' display:  flex ;');
assert(divWithStyle.hasAttribute('style'), true, 'hasAttribute');
assert(divWithStyle.getAttribute('style'), ' display:  flex ;', 'getAttribute');
assert([...divWithStyle.style].join(','), 'display', 'iterable');
assert(Array.from(divWithStyle.style).join(','), 'display', 'Array.from');
divWithStyle.style.setProperty('display', 'block');
assert([...divWithStyle.style].join(','), 'display', 'iterable after change');
assert(Array.from(divWithStyle.style).join(','), 'display', 'Array.from after change');
divWithStyle.style.setProperty('color', 'green');
assert([...divWithStyle.style].join(','), 'display,color', 'iterable after adding property');
assert(Array.from(divWithStyle.style).join(','), 'display,color', 'Array.from after adding property');

// Issue #327: el.style.color = '' removes the property cleanly
const el327 = document.createElement('div');
el327.style.color = 'red';
el327.style.fontSize = '12px';
assert(el327.style.color, 'red', 'el327 color set');
el327.style.color = '';
assert(el327.style.color, '', 'el327 color removed');
assert(el327.style.cssText, 'font-size: 12px;', 'el327 valid cssText');
assert(el327.toString(), '<div style="font-size: 12px;"></div>', 'el327 serialization');

// Semicolons inside url("data:...")
const elDataUrl = document.createElement('div');
const dataUrl = 'url("data:image/svg+xml;utf8,<svg><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" stroke=\\"black\\"/></svg>")';
elDataUrl.style.backgroundImage = dataUrl;
assert(elDataUrl.style.backgroundImage, dataUrl, 'dataUrl with semicolons preserved');
assert(elDataUrl.style.cssText, `background-image: ${dataUrl};`, 'dataUrl cssText');

// Preserving case on --customProperty
const elCustom = document.createElement('div');
elCustom.style.setProperty('--customProperty', '100px');
assert(elCustom.style.getPropertyValue('--customProperty'), '100px', 'customProperty getPropertyValue');
assert(elCustom.style['--customProperty'], '100px', 'customProperty proxy getter');
elCustom.style['--anotherCamelCase'] = 'blue';
assert(elCustom.style.getPropertyValue('--anotherCamelCase'), 'blue', 'anotherCamelCase getPropertyValue');
assert(elCustom.style['--anotherCamelCase'], 'blue', 'anotherCamelCase proxy getter');
assert(elCustom.style.cssText.includes('--customProperty: 100px;'), true, 'cssText contains --customProperty');
assert(elCustom.style.cssText.includes('--anotherCamelCase: blue;'), true, 'cssText contains --anotherCamelCase');

// Proxy trap coverage (has, ownKeys, getOwnPropertyDescriptor, standalone constructor)
const elTraps = document.createElement('div');
elTraps.style.color = 'red';
assert('color' in elTraps.style, true, 'has trap');
assert(Object.keys(elTraps.style).length > 0, true, 'ownKeys trap');
Object.getOwnPropertyDescriptor(elTraps.style, 'color');

const {CSSStyleDeclaration} = require('../../cjs/interface/css-style-declaration.js');
const standalone = new CSSStyleDeclaration();
assert(standalone.length, 0, 'standalone style declaration');
assert(standalone.toString(), '', 'standalone style declaration toString');


