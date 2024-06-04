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

// &amp; bug
const androidDocument = (new DOMParser).parseFromString('<hierarchy><android.view.View content-desc="text3&more"/></hierarchy>', 'text/xml');

assert(androidDocument.firstElementChild.firstElementChild.getAttribute('content-desc', true), 'text3&more');
assert(androidDocument.firstElementChild.firstElementChild.attributes['content-desc'].value, 'text3&more');
