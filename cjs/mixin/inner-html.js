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
