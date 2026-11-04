const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

const document = (new DOMParser).parseFromString('<root></root>', 'text/xml');

assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><root />');

assert(document.documentElement.tagName, 'root');
assert(document.documentElement.nodeName, 'root');


document.documentElement.innerHTML = `
<Something>
  <Element>Text</Element>
  <Element>Text</Element>
</Something>
`.trim();

assert(document.querySelectorAll('Element').length, 2, 'case sesntivive 2');
assert(document.querySelectorAll('element').length, 0, 'case sesntivive 0');

// in xml every character of a class value is escaped on output, as for any other attribute
{
  const xml = (new DOMParser).parseFromString('<root class="a&lt;b  &amp;c  a&lt;b"/>', 'text/xml');
  assert(xml.documentElement.getAttribute('class'), 'a<b &c', 'class value with markup characters');
  assert(xml.documentElement.toString(), '<root class="a&lt;b &amp;c" />', 'class value escaped in xml');
}
