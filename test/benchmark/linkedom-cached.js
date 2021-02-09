const benchmark = require('./index.js');
const {DOMParser} = require('../../cjs/cached.js');
const dp = new DOMParser;

benchmark('linkedom cached', html => dp.parseFromString(html, 'text/html'));
