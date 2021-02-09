const benchmark = require('./index.js');
const {JSDOM} = require('jsdom');

benchmark('JSDOM', html => new JSDOM(html).window.document);
