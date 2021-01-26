'use strict';
const DOMParser = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('./dom-parser.js'));
const {HTMLDocument} = require('./html-document.js');
const {SVGDocument} = require('./svg-document.js');
const {XMLDocument} = require('./xml-document.js');

exports.DOMParser = DOMParser;
exports.HTMLDocument = HTMLDocument;
exports.SVGDocument = SVGDocument;
exports.XMLDocument = XMLDocument;
