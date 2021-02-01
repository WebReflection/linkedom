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

const {customElements} = require('./custom-element-registry.js');

const setupNode = node => {
  if ('attributeChangedCallback' in node)
    customElements.get(node).setup = true;
};

const htmlClasses = new Map;
exports.htmlClasses = htmlClasses;
const registerHTMLClass = (names, Class) => {
  for (const name of [].concat(names)) {
    htmlClasses.set(name, Class);
    htmlClasses.set(name.toUpperCase(), Class);
  }
};
exports.registerHTMLClass = registerHTMLClass;

const $String = String;
exports.String = $String;

// const textOnly = {test: () => false};
const voidElements = {test: () => true};
const Mime = {
  'text/html': {
    docType: '<!DOCTYPE html>',
    ignoreCase: true,
    // textOnly: /^(?:plaintext|script|style|textarea|title|xmp)$/i,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  'image/svg+xml': {
    docType: '',
    ignoreCase: false,
    // textOnly,
    voidElements
  },
  'text/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    // textOnly,
    voidElements
  },
  'application/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    // textOnly,
    voidElements
  },
  'application/xhtml+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    // textOnly,
    voidElements
  }
};
exports.Mime = Mime;

// TODO: use name.toLowerCase() if there are accessors camelCase
const accessorAttribute = {
  get(element, name) {
    return element.getAttribute(name);
  },
  set(element, name, value) {
    if (value === null)
      element.removeAttribute(name);
    else
      element.setAttribute(name, value);
  }
};
exports.accessorAttribute = accessorAttribute;

const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name.toLowerCase());
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name.toLowerCase(), '');
    else
      element.removeAttribute(name.toLowerCase());
  }
};
exports.booleanAttribute = booleanAttribute;

const numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name.toLowerCase()) || -1);
  },
  set(element, name, value) {
    element.setAttribute(name.toLowerCase(), value);
  }
};
exports.numericAttribute = numericAttribute;

const stringAttribute = {
  get(element, name) {
    return element.getAttribute(name.toLowerCase()) || '';
  },
  set(element, name, value) {
    element.setAttribute(name.toLowerCase(), value);
  }
};
exports.stringAttribute = stringAttribute;


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

const setAdjacent = (before, after) => {
  if (before)
    before._next = after;
  if (after)
    after._prev = before;
};
exports.setAdjacent = setAdjacent;

const setBoundaries = (before, current, after) => {
  if (before)
    before._next = current;
  current._prev = before;
  current = getEnd(current);
  current._next = after;
  if (after)
    after._prev = current;
};
exports.setBoundaries = setBoundaries;

const HTML = 'text/html';
const VOID_SOURCE = Mime[HTML].voidElements.source.slice(4, -2);
const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);
const parseFromString = (document, isHTML, markupLanguage) => {
  if (!markupLanguage)
    return document;
  const {SVGElement} = document[DOM];
  const {_customElements} = document;
  const {_active, _registry} = _customElements;
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
        else if (_active && _registry.has(name)) {
          const {Class} = _registry.get(name);
          setupNode(node = node.appendChild(new Class));
          return;
        }
      }
      node = node.appendChild(document.createElement(name));
    },
    onattribute(name, value) {
      if (isHTML && _active && name === 'is' && _registry.has(value)) {
        const {Class} = _registry.get(value);
        const custom = new Class;
        const {_end} = custom;
        for (const attribute of node.attributes) {
          attribute.ownerElement = custom;
          setBoundaries(_end._prev, attribute, _end);
        }
        node.replaceWith(custom);
        setupNode(node = custom);
      }
      else
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
