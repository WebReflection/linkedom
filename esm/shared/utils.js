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
