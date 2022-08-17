const assert = require('../assert.js').for('HTMLImageElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><img></html>');

const {firstElementChild: img} = document.documentElement;

img.src = 'example.org';
assert(img.src, 'example.org', 'Issue #10 - <img>.src');
assert(img.toString(), '<img src="example.org">', 'Issue #10 - <img>.src');

img.width = 99;
assert(img.toString(), '<img width="99" src="example.org">', '<img>.width');
assert(img.width, 99);
assert(img.height, 0);
assert(img.lastChild, null, 'lastChild');

const { document: withBase } = parseHTML('<html><img></html>', { 
	location: {
		href: 'https://example.com'
	} 
});

const { firstElementChild: imgWithBase } = withBase.documentElement;

assert(imgWithBase.src, '', 'Issue #153 - <img>.src with <base>');

imgWithBase.src = 'avatar.png';
assert(imgWithBase.src, 'https://example.com/avatar.png', 'Issue #153 - <img>.src with <base>');
