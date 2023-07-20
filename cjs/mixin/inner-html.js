'use strict';
const {ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {CUSTOM_ELEMENTS} = require('../shared/symbols.js');
const {parseFromString} = require('../shared/parse-from-string.js');
const {ignoreCase} = require('../shared/utils.js');


/**
 * @param {Node} node
 * @returns {String}
 */
const getInnerHtml = node => node.childNodes.join('');
exports.getInnerHtml = getInnerHtml;

/**
 * @param {Node} node - Node to be serialized to HTML, potentially including shadow roots
 * @param {Object} opts - Options
 * @param {Object} opts.includeShadowRoots - Whether to include shadow roots in the output
 * @param {Object} opts.closedRoots - A list of closed shadow roots to include in the output
 * @returns {String} string of HTML representing the node and its descendants
 */
function getInnerHTML(node, opts) {
  // adapted from this polyfill https://gist.github.com/developit/54f3e3d1ce9ed0e5a171044edcd0784f
  const html = node.innerHTML;
  if (!opts || !opts.includeShadowRoots) return html;
  const m = new Map();
  for (const c of opts.closedRoots || []) m.set(c.host, c);
  const p = [];
  
  function walk(node) {
    let c;
    let shadow = node.shadowRoot || m.get(node);
    if (shadow) {
      // TODO: a more efficient solution would avoid serialization of the shadow DOM here
      p.push(node.innerHTML, `<template shadowrootmode="${shadow.mode}">${shadow.innerHTML}</template>`);
    }

    c = node.firstElementChild;
    while (c) {
      walk(c);
      c = c.nextElementSibling;
    }
  }
  
  walk(node);
  let out = "",
    c = 0,
    i = 0,
    o;
  for (; c < p.length; c += 2) {
    o = html.indexOf(p[c], i);
    out += html.substring(i, o) + p[c + 1];
    i = o;
  }
  return out + html.substring(i);
}
exports.getInnerHTML = getInnerHTML

/**
 * @param {Node} node
 * @param {String} html
 */
const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes.map(setOwnerDocument, ownerDocument));
};
exports.setInnerHtml = setInnerHtml;

function setOwnerDocument(node) {
  node.ownerDocument = this;
  switch (node.nodeType) {
    case ELEMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      node.childNodes.forEach(setOwnerDocument, this);
      break;
  }
  return node;
}
