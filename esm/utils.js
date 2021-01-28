import {Parser} from 'htmlparser2';

import {
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  TEXT_NODE,
  COMMENT_NODE
} from './constants.js';

const $String = String;
export {$String as String};

const voidElements = {test: () => true};
export const Mime = {
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

export const findNext = ({_next, _end}) => {
  while (_next.nodeType === ATTRIBUTE_NODE)
    _next = _next._next;
  return {_next, _end};
};

export const getBoundaries = node => ({
  _prev: node._prev,
  _next: getEnd(node)._next
});

export const getEnd = node => node.nodeType === ELEMENT_NODE ?
                              node._end : node;

export const getNext = ({_next}) => {
  while (_next && _next.nodeType === ELEMENT_NODE_END)
    _next = _next._next;
  return _next;
};

export const getPrev = ({_prev}) => {
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

export const ignoreCase = ({ownerDocument}) => ownerDocument._mime.ignoreCase;

// export const invalidate = $ => { $._childNodes = $._children = null; };

export const isVoidElement = ({localName, ownerDocument}) => {
  return ownerDocument._mime.voidElements.test(localName);
};

export const localCase = ({localName, ownerDocument}) => {
  return ownerDocument._mime.ignoreCase ? localName.toUpperCase() : localName;
};

const HTML = 'text/html';
const VOID_SOURCE = Mime[HTML].voidElements.source.slice(4, -2);
const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);
export const parseFromString = (document, isHTML, markupLanguage) => {
  let node = document.root || document.createElement('root');
  const content = new Parser({
    onopentagname(name) {
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
