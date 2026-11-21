const assert = require('../assert.js').for('Retained :has() reflected attributes');
const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<div><p></p><span></span></div>');
const p = document.querySelector('p');
const span = document.querySelector('span');
const selector = 'div:has([slot="yes"]) p';
const results = [span.slot, p.matches(selector)];
span.slot = 'yes';
results.push(span.slot, p.matches(selector));
span.slot = '';
results.push(span.slot, p.matches(selector));
assert(JSON.stringify(results), '["",false,"yes",true,"",false]', 'retained :has() follows reflected attribute changes');
