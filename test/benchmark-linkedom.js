const benchmark = require('./benchmark.js');
const {DOMParser} = require('../cjs');
const dp = new DOMParser;

benchmark('linkedom', html => dp.parseFromString(html, 'text/html'));
