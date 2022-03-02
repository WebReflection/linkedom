'use strict';
const {DOMParser} = require('./dom/parser.js');
const {Document: _Document} = require('./interface/document.js');

const {illegalConstructor} = require('./shared/facades.js');
const {setPrototypeOf} = require('./shared/object.js');
(m => {
  exports.parseJSON = m.parseJSON;
  exports.toJSON = m.toJSON;
})(require('./shared/parse-json.js'));

(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./shared/facades.js'));
(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./shared/html-classes.js'));

exports.DOMParser = DOMParser;

(m => {
  exports.CustomEvent = m.CustomEvent;
})(require('./interface/custom-event.js'));
(m => {
  exports.Event = m.Event;
})(require('./interface/event.js'));
(m => {
  exports.EventTarget = m.EventTarget;
})(require('./interface/event-target.js'));
(m => {
  exports.InputEvent = m.InputEvent;
})(require('./interface/input-event.js'));
(m => {
  exports.NodeList = m.NodeList;
})(require('./interface/node-list.js'));
(m => {
  exports.NodeFilter = m.NodeFilter;
})(require('./interface/node-filter.js'));

const parseHTML = (html, globals = null) => (new DOMParser).parseFromString(
  html, 'text/html', globals
).defaultView;
exports.parseHTML = parseHTML;

function Document() {
  illegalConstructor();
}
exports.Document = Document

setPrototypeOf(Document, _Document).prototype = _Document.prototype;
