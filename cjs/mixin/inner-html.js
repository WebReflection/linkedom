'use strict';
const {ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {CUSTOM_ELEMENTS, END, NEXT} = require('../shared/symbols.js');
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
  const isHTML = ignoreCase(node);
  // the content of an SVG element is SVG: <rect/> closes, children are SVGElement
  const isSVG = isHTML && 'ownerSVGElement' in node;
  let {childNodes} = parseFromString(document, isHTML, isSVG ? `<svg>${html}</svg>` : html);

  if (isSVG) {
    const svg = childNodes[0];
    const ownerSVGElement = node.localName === 'svg' ? node : node.ownerSVGElement;
    let {[NEXT]: next, [END]: end} = svg;
    while (next !== end) {
      if (next.nodeType === ELEMENT_NODE)
        next.ownerSVGElement = ownerSVGElement;
      next = next[NEXT];
    }
    childNodes = svg.childNodes;
  }

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
