'use strict';
const CSSselect = require('css-select');

const {ELEMENT_NODE, TEXT_NODE} = require('./constants.js');
const {ignoreCase} = require('./utils.js');

const {isArray} = Array;

/* c8 ignore start */
const isTag = ({nodeType}) => nodeType === ELEMENT_NODE;

const existsOne = (test, elements) => elements.some(
  element => isTag(element) && (
    test(element) ||
    existsOne(test, getChildren(element))
  )
);

const getAttributeValue = (element, name) => name === 'class' ?
  (element.getAttributeNode('class')?.value ?? null) : element.getAttribute(name);

const getChildren = ({childNodes}) => childNodes;

const getName = (element) => {
  const {localName} = element;
  return ignoreCase(element) ? localName.toLowerCase() : localName;
};

const getParent = ({parentNode}) => parentNode;

const getSiblings = element => {
  const {parentNode} = element;
  return parentNode ? getChildren(parentNode) : element;
};

const getText = node => {
  if (isArray(node))
    return node.map(getText).join('');
  if (isTag(node))
    return getText(getChildren(node));
  if (node.nodeType === TEXT_NODE)
    return node.data;
  return '';
};

const hasAttrib = (element, name) => element.hasAttribute(name);

const removeSubsets = nodes => {
  let {length} = nodes;
  while (length--) {
    const node = nodes[length];
    if (length && -1 < nodes.lastIndexOf(node, length - 1)) {
      nodes.splice(length, 1);
      continue;
    }
    for (let {parentNode} = node; parentNode; parentNode = parentNode.parentNode) {
      if (nodes.includes(parentNode)) {
        nodes.splice(length, 1);
        break;
      }
    }
  }
  return nodes;
};

const findAll = (test, nodes) => {
  const matches = [];
  for (const node of nodes) {
    if (isTag(node)) {
      if (test(node))
        matches.push(node);
      matches.push(...findAll(test, getChildren(node)));
    }
  }
  return matches;
};

const findOne = (test, nodes) => {
  for (let node of nodes)
    if (test(node) || (node = findOne(test, getChildren(node))))
      return node;
  return null;
};
/* c8 ignore stop */

const adapter = {
  isTag,
  existsOne,
  getAttributeValue,
  getChildren,
  getName,
  getParent,
  getSiblings,
  getText,
  hasAttrib,
  removeSubsets,
  findAll,
  findOne
};

const prepareMatch = (element, selectors) => CSSselect.compile(
  selectors,
  {
    context: selectors.includes(':scope') ? element : void 0,
    xmlMode: !ignoreCase(element),
    adapter
  }
);
exports.prepareMatch = prepareMatch;

// matches() is called once per element and selector pair, so the selector
// is compiled once and kept, instead of parsed again on every call.
// :scope depends on the element, so those are compiled each time.
const compiled = new Map;
const MAX_COMPILED = 1024;

/** @returns {boolean} */
const matches = (element, selectors) => {
  const xmlMode = !ignoreCase(element);
  if (selectors.includes(':scope'))
    return CSSselect.is(
      element,
      selectors,
      {strict: true, context: element, xmlMode, adapter}
    );
  const key = (xmlMode ? 'x' : 'h') + selectors;
  let test = compiled.get(key);
  if (!test) {
    if (compiled.size === MAX_COMPILED)
      compiled.delete(compiled.keys().next().value);
    test = CSSselect.compile(selectors, {strict: true, xmlMode, adapter});
    compiled.set(key, test);
  }
  return test(element);
};
exports.matches = matches;
