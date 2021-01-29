'use strict';
(m => {
  exports.DOMParser = m.DOMParser;
})(require('./dom-parser.js'));

(m => {
  exports.Node = m.Node;
})(require('./node.js'));

(m => {
  exports.HTMLElement = m.HTMLElement;
})(require('./html/html-element.js'));

(m => {
  exports.EventTarget = m.EventTarget;
  exports.Event = m.Event;
  exports.CustomEvent = m.CustomEvent;
})(require('./interfaces.js'));
