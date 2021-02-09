'use strict';
// https://dom.spec.whatwg.org/#nondocumenttypechildnode
// CharacterData, Element

const {ELEMENT_NODE} = require('../shared/constants.js');

const {nextSibling, previousSibling} = require('../shared/node.js');

const nextElementSibling = node => {
  let next = nextSibling(node);
  while (next && next.nodeType !== ELEMENT_NODE)
    next = nextSibling(next);
  return next;
};
exports.nextElementSibling = nextElementSibling;

const previousElementSibling = node => {
  let prev = previousSibling(node);
  while (prev && prev.nodeType !== ELEMENT_NODE)
    prev = previousSibling(prev);
  return prev;
};
exports.previousElementSibling = previousElementSibling;
