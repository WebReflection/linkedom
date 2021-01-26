const benchmark = require('./benchmark.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

benchmark('JSDOM', html => new JSDOM(html).window.document);
