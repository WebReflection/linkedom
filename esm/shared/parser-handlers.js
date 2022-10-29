import {ELEMENT_NODE, SVG_NAMESPACE} from './constants.js';
import {CUSTOM_ELEMENTS, PREV, END, VALUE} from './symbols.js';
import {keys} from './object.js';

import {knownBoundaries, knownSiblings} from './utils.js';
import {attributeChangedCallback, connectedCallback} from '../interface/custom-element-registry.js';


/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {import('../html/document.js').HTMLDocument} HTMLDocument
 * @typedef {import('../svg/document').SVGDocument} SVGDocument
 * @typedef {import('../xml/document').XMLDocument} XMLDocument
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */

export const append = (self, node, active) => {
  const end = self[END];
  node.parentNode = self;
  knownBoundaries(end[PREV], node, end);
  if (active && node.nodeType === ELEMENT_NODE)
    connectedCallback(node);
  return node;
};

export const attribute = (element, end, attribute, value, active) => {
  attribute[VALUE] = value;
  attribute.ownerElement = element;
  knownSiblings(end[PREV], attribute, end);
  if (attribute.name === 'class')
    element.className = value;
  if (active)
    attributeChangedCallback(element, attribute.name, null, value);
};

/**
 * @param {string} name
 * @param {string} data
 */
export const onprocessinginstruction = (name, data) => {
  if (name.toLowerCase() === '!doctype')
    return data.slice(name.length).trim();
}

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} name
 * @param {Record<string, string>} attributes
 * @param {StackItem} item
 * @param {boolean} isHTML
 */
export const onopentag = (name, attributes, item, isHTML) => {
  const { document } = item;
  const { active, registry } = document[CUSTOM_ELEMENTS];
  let create = true;
  if (isHTML) {
    if (item.ownerSVGElement) {
      item.node = append(item.node, document.createElementNS(SVG_NAMESPACE, name), active);
      item.node.ownerSVGElement = item.ownerSVGElement;
      create = false;
    } else if (name === 'svg' || name === 'SVG') {
      item.ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
      item.node = append(item.node, item.ownerSVGElement, active);
      create = false;
    } else if (active) {
      const ce = name.includes('-') ? name : (attributes.is || '');
      if (ce && registry.has(ce)) {
        const {Class} = registry.get(ce);
        item.node = append(item.node, new Class, active);
        delete attributes.is;
        create = false;
      }
    }
  }
  if (create) item.node = append(item.node, document.createElement(name), false);
  let end = item.node[END];
  for (const name of keys(attributes)) {
    attribute(item.node, end, document.createAttribute(name), attributes[name], active);
  }
  if (!item.rootNode) item.rootNode = item.node;
}

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} data 
 * @param {StackItem} item
 */
export const oncomment = (data, item) => {
  const { document, node } = item;
  const { active } = document[CUSTOM_ELEMENTS];
  append(node, document.createComment(data), active);
}

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {string} data 
 * @param {StackItem} item
 */
export const ontext = (text, item) => {
  const { document, node } = item;
  const { active } = document[CUSTOM_ELEMENTS];
  append(node, document.createTextNode(text), active);
}

/**
 * @template {{
 *   document: MimeToDoc[keyof MimeToDoc]
 *   node: MimeToDoc[keyof MimeToDoc]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node|undefined
 * }} StackItem
 * @param {StackItem} item
 * @param {boolean} isHTML
 * @param {((document: MimeToDoc[keyof MimeToDoc]) => void)|undefined} cb
 */
export const onclosetag = (item, isHTML, cb) => {
  const { document } = item
  if (isHTML && item.node === item.ownerSVGElement) {
    item.ownerSVGElement = undefined;
  }
  if (item.node === item.rootNode) {
    cb && cb(document);
  }
  item.node = item.node.parentNode;
}
