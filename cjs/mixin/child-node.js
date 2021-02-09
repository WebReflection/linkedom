'use strict';
// https://dom.spec.whatwg.org/#childnode
// CharacterData, DocumentType, Element

const {ELEMENT_NODE} = require('../shared/constants.js');
const {NEXT, PREV} = require('../shared/symbols.js');

const {getEnd, setAdjacent} = require('../shared/utils.js');

const {moCallback} = require('../interface/mutation-observer.js');
const {disconnectedCallback} = require('../interface/custom-element-registry.js');

const asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};

const before = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
};
exports.before = before;

const after = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode)
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      getEnd(node)[NEXT]
    );
};
exports.after = after;

const replaceWith = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
    node.remove();
  }
};
exports.replaceWith = replaceWith;

const remove = (prev, current, next) => {
  const {parentNode, nodeType} = current;
  if (prev || next) {
    setAdjacent(prev, next);
    current[PREV] = null;
    getEnd(current)[NEXT] = null;
  }
  if (parentNode) {
    current.parentNode = null;
    moCallback(current, parentNode);
    if (nodeType === ELEMENT_NODE)
      disconnectedCallback(current);
  }
};
exports.remove = remove;
