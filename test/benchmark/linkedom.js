const benchmark = require('./index.js');
const {DOMParser} = require('../../cjs/index.js');
const dp = new DOMParser;

benchmark('linkedom', html => dp.parseFromString(html, 'text/html'));
