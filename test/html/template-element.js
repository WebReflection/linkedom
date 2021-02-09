const assert = require('../assert.js').for('HTMLTemplateElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<template><div>foo</div><div>bar</div></template>');

const template = document.documentElement;
assert(template.innerHTML, '<div>foo</div><div>bar</div>');

assert(template.content, template.content);

template.content.replaceChildren();
assert(template.innerHTML, '');

template.innerHTML = '<p>ok</p>';
assert(template.innerHTML, '<p>ok</p>');
