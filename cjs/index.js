'use strict';
(m => {
  exports.DOMParser = m.DOMParser;
})(require('./dom-parser.js'));
(m => {
  exports.HTMLDocument = m.HTMLDocument;
})(require('./html-document.js'));
(m => {
  exports.SVGDocument = m.SVGDocument;
})(require('./svg-document.js'));
(m => {
  exports.XMLDocument = m.XMLDocument;
})(require('./xml-document.js'));
(m => {
  exports.CustomEvent = m.CustomEvent;
  exports.Event = m.Event;
  exports.EventTarget = m.EventTarget;
})(require('./interfaces.js'));
