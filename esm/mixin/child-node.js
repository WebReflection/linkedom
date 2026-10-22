// https://dom.spec.whatwg.org/#childnode
// CharacterData, DocumentType, Element

import {ELEMENT_NODE} from '../shared/constants.js';
import {NEXT, PREV} from '../shared/symbols.js';

import {getEnd, setAdjacent} from '../shared/utils.js';

import {moCallback} from '../interface/mutation-observer.js';
import {disconnectedCallback} from '../interface/custom-element-registry.js';

const asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};

// `node` itself can be one of `nodes`, so the insertion point is the nearest
// sibling that is not moved (the spec's viable previous/next sibling).
export const before = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    let prev = node.previousSibling;
    while (prev && nodes.includes(prev))
      prev = prev.previousSibling;
    const fragment = asFragment(ownerDocument, nodes);
    parentNode.insertBefore(
      fragment,
      prev ? prev.nextSibling : parentNode.firstChild
    );
  }
};

export const after = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    let next = getEnd(node)[NEXT];
    while (next && nodes.includes(next))
      next = getEnd(next)[NEXT];
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      next
    );
  }
};

export const replaceWith = (node, nodes) => {
  const {ownerDocument, parentNode} = node;
  if (parentNode) {
    if (nodes.includes(node))
      replaceWith(node, [node = node.cloneNode()]);
    parentNode.insertBefore(
      asFragment(ownerDocument, nodes),
      node
    );
    node.remove();
  }
};

export const remove = (prev, current, next) => {
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
