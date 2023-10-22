'use strict';
const {
  NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  TEXT_NODE,
  CDATA_SECTION_NODE,
  COMMENT_NODE,
  DOCUMENT_NODE,
  DOCUMENT_TYPE_NODE,
  DOCUMENT_FRAGMENT_NODE
} = require('./constants.js');

const {END, PREV} = require('./symbols.js');

const {htmlClasses} = require('./register-html-class.js');
const {knownBoundaries, knownSiblings} = require('./utils.js');

const {Attr} = require('../interface/attr.js');
const {CDATASection} = require('../interface/cdata-section.js');
const {Comment} = require('../interface/comment.js');
const {DocumentType} = require('../interface/document-type.js');
const {Text} = require('../interface/text.js');

const {HTMLDocument} = require('../html/document.js');
const {HTMLElement} = require('../html/element.js');
const {SVGElement} = require('../svg/element.js');

const {parse} = JSON;

const append = (parentNode, node, end) => {
  node.parentNode = parentNode;
  knownSiblings(end[PREV], node, end);
};

const createHTMLElement = (ownerDocument, localName) => {
  if (htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  return new HTMLElement(ownerDocument, localName);
};

/**
 * @typedef {number|string} jsdonValue - either a node type or its content
 */

/**
 * Given a stringified, or arrayfied DOM element, returns an HTMLDocument
 * that represent the content of such string, or array.
 * @param {string|jsdonValue[]} value
 * @returns {HTMLDocument}
 */
const parseJSON = value => {
  const array = typeof value === 'string' ? parse(value) : value;
  const {length} = array;
  const document = new HTMLDocument;
  let parentNode = document, end = parentNode[END], svg = false, i = 0;
  while (i < length) {
    let nodeType = array[i++];
    switch (nodeType) {
      case ELEMENT_NODE: {
        const localName = array[i++];
        const isSVG = svg || localName === 'svg' || localName === 'SVG';
        const element = isSVG ?
                          new SVGElement(document, localName, parentNode.ownerSVGElement || null) :
                          createHTMLElement(document, localName);
        knownBoundaries(end[PREV], element, end);
        element.parentNode = parentNode;
        parentNode = element;
        end = parentNode[END];
        svg = isSVG;
        break;
      }
      case ATTRIBUTE_NODE: {
        const name = array[i++];
        const value = typeof array[i] === 'string' ? array[i++] : '';
        const attr = new Attr(document, name, value);
        attr.ownerElement = parentNode;
        knownSiblings(end[PREV], attr, end);
        break;
      }
      case TEXT_NODE:
        append(parentNode, new Text(document, array[i++]), end);
        break;
      case COMMENT_NODE:
        append(parentNode, new Comment(document, array[i++]), end);
        break;
      case CDATA_SECTION_NODE:
        append(parentNode, new CDATASection(document, array[i++]), end);
        break;
      case DOCUMENT_TYPE_NODE: {
        const args = [document];
        while (typeof array[i] === 'string')
          args.push(array[i++]);
        if (args.length === 3 && /\.dtd$/i.test(args[2]))
          args.splice(2, 0, '');
        append(parentNode, new DocumentType(...args), end);
        break;
      }
      case DOCUMENT_FRAGMENT_NODE:
        parentNode = document.createDocumentFragment();
        end = parentNode[END];
      /* eslint no-fallthrough:0 */
      case DOCUMENT_NODE:
        break;
      default:
        do {
          nodeType -= NODE_END;
          if (svg && !parentNode.ownerSVGElement)
            svg = false;
          parentNode = parentNode.parentNode || parentNode;
        } while (nodeType < 0);
        end = parentNode[END];
        break;
    }
  }
  switch (i && array[0]) {
    case ELEMENT_NODE:
      return document.firstElementChild;
    case DOCUMENT_FRAGMENT_NODE:
      return parentNode;
  }
  return document;
};
exports.parseJSON = parseJSON;

/**
 * 
 * @param {Document|Element} node the Document or Element to serialize
 * @returns {jsdonValue[]} the linear jsdon serialized array
 */
const toJSON = node => node.toJSON();
exports.toJSON = toJSON;
