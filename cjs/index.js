'use strict';
(m => {
  exports.DOMParser = m.DOMParser;
})(require('./dom-parser.js'));

(m => {
  exports.HTMLElement = m.HTMLElement;
})(require('./html-element.js'));

(m => {
  exports.CustomEvent = m.CustomEvent;
  exports.Event = m.Event;
  exports.EventTarget = m.EventTarget;
})(require('./interfaces.js'));
