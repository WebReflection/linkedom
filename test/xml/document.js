const assert = require('../assert.js').for('XMLDocument');

const {DOMParser} = global[Symbol.for('linkedom')];

{
    const document = (new DOMParser).parseFromString('<root></root>', 'text/xml');

    assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><root />');;

    assert(document.documentElement.tagName, 'root');
    assert(document.documentElement.nodeName, 'root');


    document.documentElement.innerHTML = `
<Something>
  <Element>Text</Element>
  <Element>Text</Element>
</Something>
`.trim();

    assert(document.querySelectorAll('Element').length, 2, 'case sensitive 2');
    assert(document.querySelectorAll('element').length, 0, 'case sensitive 0');
}

{
    const document = (new DOMParser).parseFromString('<root checked attr="&amp;&lt;&gt;&quot;"></root>', 'text/xml');
    assert(document.toString(), '<?xml version="1.0" encoding="utf-8"?><root checked attr="&amp;&lt;&gt;&quot;" />');
}

