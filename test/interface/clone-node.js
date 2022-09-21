const assert = require('../assert.js').for('CloneNode');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div></div></html>');

let div = document.querySelector('div');

const clone = div.cloneNode(true);
clone.setAttribute('class', 'active');

assert(clone.toString(), '<div class="active"></div>');
assert(clone.attributes[0].ownerElement, clone);
