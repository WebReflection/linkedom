import {ELEMENT_NODE} from './constants.js';
import {END, MIME, NEXT, PREV} from './symbols.js';

const $String = String;
export {$String as String};

export const getEnd = node => node.nodeType === ELEMENT_NODE ? node[END] : node;

export const ignoreCase = ({ownerDocument}) => ownerDocument[MIME].ignoreCase;

export const knownAdjacent = (prev, next) => {
  prev[NEXT] = next;
  next[PREV] = prev;
};

export const knownBoundaries = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(getEnd(current), next);
};

export const knownSegment = (prev, start, end, next) => {
  knownAdjacent(prev, start);
  knownAdjacent(getEnd(end), next);
};

export const knownSiblings = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(current, next);
};

export const localCase = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
};

export const setAdjacent = (prev, next) => {
  if (prev)
    prev[NEXT] = next;
  if (next)
    next[PREV] = prev;
};

/**
 * @param {import("../interface/document.js").Document} ownerDocument
 * @param {string} html
 * @return {import("../interface/document-fragment.js").DocumentFragment}
 */
export const htmlToFragment = (ownerDocument, html) => {
  const fragment = ownerDocument.createDocumentFragment();

  const elem = ownerDocument.createElement('');
  elem.innerHTML = html;
  const { firstChild, lastChild } = elem;

  if (firstChild) {
    knownSegment(fragment, firstChild, lastChild, fragment[END]);

    let child = firstChild;
    do {
      child.parentNode = fragment;
    } while (child !== lastChild && (child = getEnd(child)[NEXT]));
  }

  return fragment;
};