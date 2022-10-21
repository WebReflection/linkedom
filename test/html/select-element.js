const assert = require('../assert.js').for('HTMLSelectElement');

const {parseHTML} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<select></select>');
let {firstElementChild: select} = document;

select.innerHTML = '<option></option><option selected value="OK"></option>';
assert(select.toString(), '<select><option></option><option selected value="OK"></option></select>');
assert(select.value, 'OK');
assert(select.options[1].selected, true);
select.options[0].selected = true;
assert(select.toString(), '<select><option selected></option><option value="OK"></option></select>');
select.options[0].selected = true;

({document} = parseHTML('<select><option></option><optgroup><option></option></optgroup></select>'));
({firstElementChild: select} = document);
assert(select.options.toString(), '<option></option>,<option></option>');
assert(select.options.length, 2);

