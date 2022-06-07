const assert = require('../assert.js').for('HTMLIframeElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><iframe src="./test.html"></html>');

const {firstElementChild: iframe} = document.documentElement;

assert(iframe.src, './test.html', 'Issue #82 - <iframe>.src');
