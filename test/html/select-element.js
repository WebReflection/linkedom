const assert = require('../assert.js').for('HTMLSelectElement');

const {parseHTML} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<select></select>');
let {firstElementChild: select} = document;

select.innerHTML = '<option></option>';
assert(select.toString(), '<select><option></option></select>');


({document} = parseHTML('<select><option></option><optgroup><option></option></optgroup></select>'));
({firstElementChild: select} = document);
assert(select.options.toString(), '<option></option>,<option></option>');
assert(select.options.length, 2);

