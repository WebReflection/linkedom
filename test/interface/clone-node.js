const assert = require('../assert.js').for('CloneNode');

const { parseHTML } = global[Symbol.for('linkedom')];

const { document } = parseHTML('<html><body></body></html>');

const div = document.createElement('div');
div.setAttribute('class', 'active');

const clone = div.cloneNode(true);
clone.setAttribute('id', 'active');

// console.log(clone.toString());
// console.log(clone.toString() === '<div id="active" class="active"></div>');
// console.log(clone.attributes[0].ownerElement === clone);
// console.log(clone.attributes[1].ownerElement === clone);

assert(clone.toString(), '<div id="active" class="active"></div>');
assert(clone.attributes[0].ownerElement, clone);
assert(clone.attributes[1].ownerElement, clone);