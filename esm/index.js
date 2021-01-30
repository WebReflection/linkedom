import {DOMParser} from './dom-parser.js';

import {Node} from './node.js';
import {HTMLElement} from './html/html-element.js';

import {EventTarget, Event, CustomEvent} from './interfaces.js';

export {
  DOMParser,
  Node, HTMLElement,
  EventTarget, Event, CustomEvent
};

export const parseHTML = html => {
  const document = (new DOMParser).parseFromString(html, 'text/html');
  const {defaultView: window} = document;
  return {
    Node, HTMLElement,
    EventTarget, Event, CustomEvent,
    customElements: window.customElements,
    window, document
  };
};
