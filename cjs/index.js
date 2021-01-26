'use strict';
const DOMParser = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('./dom-parser.js'));
const {HTMLDocument} = require('./html-document.js');
const {SVGDocument} = require('./svg-document.js');
const {XMLDocument} = require('./xml-document.js');

exports.DOMParser = DOMParser;
exports.HTMLDocument = HTMLDocument;
exports.SVGDocument = SVGDocument;
exports.XMLDocument = XMLDocument;
