const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<html></html>', 'text/jsx+xml');

assert(document.toString(), '<html />');

assert(document.documentElement.tagName, 'html');
assert(document.documentElement.nodeName, 'html');

document.documentElement.innerHTML = `
<Something>
  <Element someAttribute={foo}>{ bar }</Element>
  <Element>Text</Element>
</Something>
`.trim();

assert(document.querySelectorAll('Element').length, 2, 'case senstivive 2');
assert(document.querySelectorAll('element').length, 0, 'case senstivive 0');

assert(document.querySelector('Element').attributes.someAttribute.toString(), 'someAttribute={foo}', 'JSX must allow unquoted JSON attributes')
assert(document.querySelector('Element').toString(), '<Element someAttribute={foo}>{ bar }</Element>', 'JSX must render case-sensitive')

assert(document.toString(), `<html><Something>
  <Element someAttribute={foo}>{ bar }</Element>
  <Element>Text</Element>
</Something></html>`, '1:1')

const documentFullRerender = (new DOMParser).parseFromString(`<html />`, 'text/jsx+xml')

// internally creates a html -> html -> ... structure because
// documentElement cannot be replaced
documentFullRerender.documentElement.innerHTML = `<html>
    <head>
        <title>{ Some.props.catName }</title>
    </head>
    <KittenHeader title={"foo"} />
    ...
</html>`

// accessing html (documentElement) -> html (actual root) -> ... here
assert(documentFullRerender.documentElement.firstChild.toString(), `<html>
    <head>
        <title>{ Some.props.catName }</title>
    </head>
    <KittenHeader title={"foo"} />
    ...
</html>`, 'Internal logic should not override mime-type decision set by the developer')