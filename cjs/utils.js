'use strict';
const {Parser} = require('htmlparser2');

const {
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  DOM
} = require('./constants.js');

const $String = String;
exports.String = $String;

const voidElements = {test: () => true};
const Mime = {
  'text/html': {
    docType: '<!DOCTYPE html>',
    ignoreCase: true,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  'text/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xhtml+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'image/svg+xml': {
    docType: '',
    ignoreCase: false,
    voidElements
  }
};
exports.Mime = Mime;

const attributeChangedCallback = (element, name, oldValue, newValue) => {
  if (
    element &&
    element._custom &&
    element.attributeChangedCallback &&
    element.constructor.observedAttributes.includes(name)
  ) {
    element.attributeChangedCallback(name, oldValue, newValue);
  }
};
exports.attributeChangedCallback = attributeChangedCallback;

const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name);
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name, '');
    else
      element.removeAttribute(name);
  }
};
exports.booleanAttribute = booleanAttribute;

const findNext = ({_next, _end}) => {
  while (_next.nodeType === ATTRIBUTE_NODE)
    _next = _next._next;
  return {_next, _end};
};
exports.findNext = findNext;

const getBoundaries = node => ({
  _prev: node._prev,
  _next: getEnd(node)._next
});
exports.getBoundaries = getBoundaries;

const getEnd = node => node.nodeType === ELEMENT_NODE ?
                              node._end : node;
exports.getEnd = getEnd;

const getNext = ({_next}) => {
  while (_next && _next.nodeType === ELEMENT_NODE_END)
    _next = _next._next;
  return _next;
};
exports.getNext = getNext;

const getPrev = ({_prev}) => {
  if (_prev) {
    switch (_prev.nodeType) {
      case ELEMENT_NODE_END:
        return _prev._start;
      case TEXT_NODE:
      case COMMENT_NODE:
        return _prev;
    }
  }
  return null;
};
exports.getPrev = getPrev;

const ignoreCase = ({ownerDocument}) => ownerDocument._mime.ignoreCase;
exports.ignoreCase = ignoreCase;

// DO_NOTE_REMOVE export const invalidate = $ => { $._childNodes = $._children = null; };

const localCase = ({localName, ownerDocument}) => {
  return ownerDocument._mime.ignoreCase ? localName.toUpperCase() : localName;
};
exports.localCase = localCase;

const HTML = 'text/html';
const VOID_SOURCE = Mime[HTML].voidElements.source.slice(4, -2);
const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);
const parseFromString = (document, isHTML, markupLanguage) => {
  if (!markupLanguage)
    return document;
  const {SVGElement} = document[DOM];
  let node = document.root || document.createElement('root');
  let ownerSVGElement = null;
  const content = new Parser({
    onopentagname(name) {
      if (isHTML) {
        if (ownerSVGElement) {
          node = node.appendChild(new SVGElement(document, name, ownerSVGElement));
          return;
        }
        else if (name === 'svg' || name === 'SVG') {
          ownerSVGElement = new SVGElement(document, name);
          node = node.appendChild(ownerSVGElement);
          return;
        }
      }
      node = node.appendChild(document.createElement(name));
    },
    onattribute(name, value) {
      node.setAttribute(name, value);
    },
    oncomment(data) {
      node.appendChild(document.createComment(data));
    },
    ontext(text) {
      node.appendChild(document.createTextNode(text));
    },
    onclosetag() {
      if (isHTML && node === ownerSVGElement)
        ownerSVGElement = null;
      node = node.parentNode;
    }
  }, {
    decodeEntities: true,
    xmlMode: true
  });
  content.write(isHTML ? voidSanitizer(markupLanguage) : markupLanguage);
  content.end();
  const {firstElementChild} = node;
  if (firstElementChild && (!isHTML || firstElementChild.tagName === 'HTML')) {
    firstElementChild.remove();
    document.root = firstElementChild;
    firstElementChild.parentNode = document;
  }
  else
    document.root = node;
  return document;
};
exports.parseFromString = parseFromString;
