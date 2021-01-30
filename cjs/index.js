'use strict';
const {DOMParser} = require('./dom-parser.js');

const {Node} = require('./node.js');
const {HTMLElement} = require('./html/html-element.js');

const {EventTarget, Event, CustomEvent} = require('./interfaces.js');

exports.DOMParser = DOMParser;
exports.Node = Node;
exports.HTMLElement = HTMLElement;
exports.EventTarget = EventTarget;
exports.Event = Event;
exports.CustomEvent = CustomEvent;

const parseHTML = html => {
  const document = (new DOMParser).parseFromString(html, 'text/html');
  const {defaultView: window} = document;
  return {
    Node, HTMLElement,
    EventTarget, Event, CustomEvent,
    customElements: window.customElements,
    window, document
  };
};
exports.parseHTML = parseHTML;
