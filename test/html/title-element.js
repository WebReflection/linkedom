const assert = require('../assert.js').for('HTMLTitleElement');

const {DOMParser, parseHTML} = global[Symbol.for('linkedom')];

const {document: htmlDoc} = parseHTML('<title>abc&<>"\t\n\r\xA0</title>');
assert(
  htmlDoc.toString(),
  '<title>abc&amp;&lt;&gt;"\t\n\r&nbsp;</title>'
);

const htmlTitle = htmlDoc.querySelector('title');
htmlTitle.innerHTML = '<a>sub element</a>';
assert(
  htmlTitle.innerHTML,
  '&lt;a&gt;sub element&lt;/a&gt;'
);
assert(
  htmlDoc.toString(),
  '<title>&lt;a&gt;sub element&lt;/a&gt;</title>'
);
assert(htmlDoc.querySelectorAll('a').length, 0);

const xhtmlDoc = (new DOMParser).parseFromString('<title xmlns="http://www.w3.org/1999/xhtml">abc&<>"\t\n\r\xA0</title>', 'application/xhtml+xml');
assert(
  xhtmlDoc.toString(),
  '<?xml version="1.0" encoding="utf-8"?><title xmlns="http://www.w3.org/1999/xhtml">abc&amp;&lt;&gt;"\t\n\r\xA0</title>'
);

const xhtmlTitle = xhtmlDoc.querySelector('title');
xhtmlTitle.innerHTML = '<a>sub element</a>';
assert(
  xhtmlTitle.innerHTML,
  '<a>sub element</a>'
);
assert(
  xhtmlDoc.toString(),
  '<?xml version="1.0" encoding="utf-8"?><title xmlns="http://www.w3.org/1999/xhtml"><a>sub element</a></title>'
);
assert(xhtmlDoc.querySelectorAll('a').length, 1);
