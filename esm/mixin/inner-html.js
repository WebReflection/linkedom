import {ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {CUSTOM_ELEMENTS} from '../shared/symbols.js';
import {parseFromString} from '../shared/parse-from-string.js';
import {ignoreCase} from '../shared/utils.js';


/**
 * @param {Node} node
 * @returns {String}
 */
export const getInnerHtml = node => node.childNodes.join('');

/**
 * @param {Node} node
 * @param {String} html
 */
export const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes.map(setOwnerDocument, ownerDocument));
};

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
