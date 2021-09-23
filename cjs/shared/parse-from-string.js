'use strict';
const HTMLParser2 = require('htmlparser2');

const {ELEMENT_NODE, SVG_NAMESPACE} = require('./constants.js');
const {CUSTOM_ELEMENTS, PREV, END, VALUE} = require('./symbols.js');
const {keys} = require('./object.js');

const {knownBoundaries, knownSiblings} = require('./utils.js');
const {attributeChangedCallback, connectedCallback} = require('../interface/custom-element-registry.js');

const {Parser} = HTMLParser2;

// import {Mime} from './mime.js';
// const VOID_SOURCE = Mime['text/html'].voidElements.source.slice(4, -2);
// const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
// const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
// const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);

let notParsing = true;

const append = (self, node, active) => {
  const end = self[END];
  node.parentNode = self;
  knownBoundaries(end[PREV], node, end);
  if (active && node.nodeType === ELEMENT_NODE)
    connectedCallback(node);
  return node;
};

const attribute = (element, end, attribute, value, active) => {
  attribute[VALUE] = value;
  attribute.ownerElement = element;
  knownSiblings(end[PREV], attribute, end);
  if (attribute.name === 'class')
    element.className = value;
  if (active)
    attributeChangedCallback(element, attribute.name, null, value);
};

const isNotParsing = () => notParsing;
exports.isNotParsing = isNotParsing;

const parseFromString = (document, isHTML, markupLanguage) => {
  const {active, registry} = document[CUSTOM_ELEMENTS];

  let node = document;
  let ownerSVGElement = null;

  notParsing = false;

  const content = new Parser({
    // <!DOCTYPE ...>
    onprocessinginstruction(name, data) {
      if (name.toLowerCase() === '!doctype')
        document.doctype = data.slice(name.length).trim();
    },

    // <tagName>
    onopentag(name, attributes) {
      let create = true;
      if (isHTML) {
        if (ownerSVGElement) {
          node = append(node, document.createElementNS(SVG_NAMESPACE, name), active);
          node.ownerSVGElement = ownerSVGElement;
          create = false;
        }
        else if (name === 'svg' || name === 'SVG') {
          ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
          node = append(node, ownerSVGElement, active);
          create = false;
        }
        else if (active) {
          const ce = name.includes('-') ? name : (attributes.is || '');
          if (ce && registry.has(ce)) {
            const {Class} = registry.get(ce);
            node = append(node, new Class, active);
            delete attributes.is;
            create = false;
          }
        }
      }

      if (create)
        node = append(node, document.createElement(name), false);

      let end = node[END];
      for (const name of keys(attributes))
        attribute(node, end, document.createAttribute(name), attributes[name], active);
    },

    // #text, #comment
    oncomment(data) { append(node, document.createComment(data), active); },
    ontext(text) { append(node, document.createTextNode(text), active); },

    // </tagName>
    onclosetag() {
      if (isHTML && node === ownerSVGElement)
        ownerSVGElement = null;
      node = node.parentNode;
    }
  }, {
    lowerCaseAttributeNames: false,
    decodeEntities: true,
    xmlMode: !isHTML
  });

  content.write(markupLanguage);
  content.end();

  notParsing = true;

  return document;
};
exports.parseFromString = parseFromString;
