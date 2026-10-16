import {ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {CUSTOM_ELEMENTS, END, NEXT} from '../shared/symbols.js';
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
