const benchmark = require('./benchmark.js');
const {JSDOM} = require("jsdom");

benchmark('JSDOM', html => new JSDOM(html).window.document);
