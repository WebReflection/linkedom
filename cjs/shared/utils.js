'use strict';
const {ELEMENT_NODE} = require('./constants.js');
const {END, MIME, NEXT, PREV} = require('./symbols.js');

const $String = String;
exports.String = $String;

const allUpperCase = /[A-Z]/g;

// ASCII uppercase only: cheaper than a regular expression, as this runs on every lookup
const hasUpperCase = name => {
  if (typeof name !== 'string')
    return false;
  for (let i = 0; i < name.length; i++) {
    const code = name.charCodeAt(i);
    if (64 < code && 91 > code)
      return true;
  }
  return false;
};
exports.hasUpperCase = hasUpperCase;

// https://infra.spec.whatwg.org/#ascii-lowercase
const asciiLowerCase = name => $String(name).replace(
  allUpperCase,
  character => character.toLowerCase()
);
exports.asciiLowerCase = asciiLowerCase;

const getEnd = node => node.nodeType === ELEMENT_NODE ? node[END] : node;
exports.getEnd = getEnd;

// an element is in SVG when it is one, or when it lives inside one: svg.innerHTML builds
// HTML class elements (a pre-existing limitation), so checking ownerSVGElement is not enough
const inSvg = node => {
  while (node) {
    if (node.ownerSVGElement !== undefined)
      return true;
    node = node.parentNode;
  }
  return false;
};
exports.inSvg = inSvg;

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

/**
 * @param {import("../interface/document.js").Document} ownerDocument
 * @param {string} html
 * @return {import("../interface/document-fragment.js").DocumentFragment}
 */
const htmlToFragment = (ownerDocument, html) => {
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
exports.htmlToFragment = htmlToFragment;