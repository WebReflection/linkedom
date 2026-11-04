const assert = require('../assert.js').for('HTMLTemplateElement');

const {parseHTML} = global[Symbol.for('linkedom')];

let {document} = parseHTML('<template><div>foo</div><div>bar</div></template>');

let template = document.documentElement;
assert(template.innerHTML, '<div>foo</div><div>bar</div>');

assert(template.toString(), '<template><div>foo</div><div>bar</div></template>');
assert(document.toString(), '<template><div>foo</div><div>bar</div></template>');

assert(document.querySelector('template > *'), null);

assert(template.content, template.content);

template.replaceChildren();
assert(template.innerHTML, '<div>foo</div><div>bar</div>');

template.innerHTML = '<p>ok</p>';
assert(template.innerHTML, '<p>ok</p>');

template = document.createElement('template');
template.innerHTML = '<p>template</p>';
assert(template.content, template.content, 'template.content');
assert(template.innerHTML, '<p>template</p>', 'template.innerHTML');
document.documentElement.appendChild(template.content);
assert(template.innerHTML, '', 'empty template.innerHTML');

let html = `<!DOCTYPE html>
<html>

<template>
    <div></div>
</template>
<template>

</template>
</html>
`;

({document} = parseHTML(html));

assert(document.toString(), html);

const docWithTemplateAttribute = parseHTML(`<div template="anything"><p>not inside a template</p></div>`).document.documentElement;

assert(docWithTemplateAttribute.querySelector('*').tagName, 'P');
assert(docWithTemplateAttribute.querySelectorAll('*').length, 1);

template = document.createElement('template');
let fragment = document.createDocumentFragment();
let div = document.createElement('div')
div.innerHTML='<a>child element</a>';
fragment.append(div);
template.content.append(fragment);
assert(template.innerHTML, '<div><a>child element</a></div>', 'template.innerHTML');
assert(template.innerText, '', 'template.innerText');

template = document.createElement('template');
template.innerHTML='<div><a>child element  innerHTML</a></div>';
fragment = document.createDocumentFragment();
div = document.createElement('div');
div.innerHTML='<a>new child element</a>';
assert(Array.from(template.children).length, 0, 'template.appendChild zero');
template.appendChild(div);
assert(Array.from(template.children).length, 1, 'template.appendChild one');
assert(template.innerText, 'new child element', 'template.innerText');
assert(template.innerHTML, '<div><a>child element  innerHTML</a></div>', 'template.innerHTML The template maintains internal HTML even with additional children');
