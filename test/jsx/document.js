const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<root></root>', 'text/jsx+xml');

assert(document.toString(), '<root />');

assert(document.documentElement.tagName, 'root');
assert(document.documentElement.nodeName, 'root');

document.documentElement.innerHTML = `
<Something>
  <Element someAttribute={foo}>{ bar }</Element>
  <Element>Text</Element>
</Something>
`.trim();

assert(document.querySelectorAll('Element').length, 2, 'case senstivive 2');
assert(document.querySelectorAll('element').length, 0, 'case senstivive 0');

assert(document.querySelector('Element').attributes.someAttribute.toString(), 'someAttribute={foo}', 'JSX must allow unquoted JSON attributes')
