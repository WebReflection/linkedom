'use strict';
const {ELEMENT_NODE} = require('./constants.js');
const {END, MIME, NEXT, PREV} = require('./symbols.js');

const $String = String;
exports.String = $String;

const getEnd = node => node.nodeType === ELEMENT_NODE ? node[END] : node;
exports.getEnd = getEnd;

const ignoreCase = ({ownerDocument}) => ownerDocument[MIME].ignoreCase;
exports.ignoreCase = ignoreCase;

const knownAdjacent = (prev, next) => {
  prev[NEXT] = next;
  next[PREV] = prev;
};
exports.knownAdjacent = knownAdjacent;

const knownBoundaries = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(getEnd(current), next);
};
exports.knownBoundaries = knownBoundaries;

const knownSegment = (prev, start, end, next) => {
  knownAdjacent(prev, start);
  knownAdjacent(getEnd(end), next);
};
exports.knownSegment = knownSegment;

const knownSiblings = (prev, current, next) => {
  knownAdjacent(prev, current);
  knownAdjacent(current, next);
};
exports.knownSiblings = knownSiblings;

const localCase = ({localName, ownerDocument}) => {
  return ownerDocument[MIME].ignoreCase ? localName.toUpperCase() : localName;
};
exports.localCase = localCase;

const setAdjacent = (prev, next) => {
  if (prev)
    prev[NEXT] = next;
  if (next)
    next[PREV] = prev;
};
exports.setAdjacent = setAdjacent;
