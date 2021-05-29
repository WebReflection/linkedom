'use strict';
const {CLASS_LIST, NEXT, PREV, VALUE} = require('./symbols.js');

const {knownAdjacent, knownSiblings} = require('./utils.js');

const {attributeChangedCallback: ceAttributes} = require('../interface/custom-element-registry.js');
const {attributeChangedCallback: moAttributes} = require('../interface/mutation-observer.js');

const emptyAttributes = new Set([
  'allowfullscreen',
  'allowpaymentrequest',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'class',
  'contenteditable',
  'controls',
  'default',
  'defer',
  'disabled',
  'draggable',
  'formnovalidate',
  'hidden',
  'id',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nomodule',
  'novalidate',
  'open',
  'playsinline',
  'readonly',
  'required',
  'reversed',
  'selected',
  'style',
  'truespeed'
]);
exports.emptyAttributes = emptyAttributes;

const setAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  attribute.ownerElement = element;
  knownSiblings(element, attribute, element[NEXT]);
  if (name === 'class')
    element.className = value;
  moAttributes(element, name, null);
  ceAttributes(element, name, null, value);
};
exports.setAttribute = setAttribute;

const removeAttribute = (element, attribute) => {
  const {[VALUE]: value, name} = attribute;
  knownAdjacent(attribute[PREV], attribute[NEXT]);
  attribute.ownerElement = attribute[PREV] = attribute[NEXT] = null;
  if (name === 'class')
    element[CLASS_LIST] = null;
  moAttributes(element, name, value);
  ceAttributes(element, name, value, null);
};
exports.removeAttribute = removeAttribute;

const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name);
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name, '');
    else
      element.removeAttribute(name);
  }
};
exports.booleanAttribute = booleanAttribute;

const numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name) || 0);
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};
exports.numericAttribute = numericAttribute;

const stringAttribute = {
  get(element, name) {
    return element.getAttribute(name) || '';
  },
  set(element, name, value) {
    element.setAttribute(name, value);
  }
};
exports.stringAttribute = stringAttribute;

/* oddly enough, this apparently is not a thing
export const nullableAttribute = {
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
*/
