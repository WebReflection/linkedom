'use strict';
const { Writable } = require('stream');
const { WritableStream } = require('htmlparser2/lib/WritableStream');

const {ELEMENT_NODE, SVG_NAMESPACE} = require('../shared/constants');
const {CUSTOM_ELEMENTS, PREV, END, VALUE} = require('../shared/symbols');
const {keys} = require('../shared/object');

const {knownBoundaries, knownSiblings} = require('../shared/utils');
const {attributeChangedCallback, connectedCallback} = require('../interface/custom-element-registry.js');

const {HTMLDocument} = require('../html/document.js');
const {SVGDocument} = require('../svg/document.js');
const {XMLDocument} = require('../xml/document.js');

/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 * @typedef {(name: string, attributes: Record<string, string>) => boolean} Filter
 */

/**
 * @template {keyof MimeToDoc} MIME
 * @template {Filter} FILTER
 * @template {{
 *   document: MimeToDoc[MIME]
 *   node: MimeToDoc[MIME]|Node
 *   ownerSVGElement: SVGElement|undefined
 *   rootNode: Node
 * }} StackItem
 * @template {Writable['on'] & (name: 'document', listener: (doc: MimeToDoc[MIME]) => void) => this} Listener
 * @template {Writable['emit'] & (name: 'document', doc: MimeToDoc[MIME]) => boolean} Emitter
 *
 * @property {MIME} mimeType
 * @property {FILTER} filter
 *
 * @property {MIME extends 'text/html' ? true : false} isHTML
 * @property {StackItem[]} stack
 * @property {string} doctype
 * 
 * @property {Listener} addListener
 * @property {Emitter} emit
 * @property {Listener} on
 * @property {Listener} once
 * @property {Listener} prependListener
 * @property {Listener} prependOnceListener
 * @property {Listener} removeListener
 * @property {Listener} off

 * @extends {Writable}
 */
class DOMStream extends Writable {
  /**
   * @param {MIME} mimeType
   * @param {FILTER} filter
   */
  constructor (mimeType, filter) {
    super();
    this.mimeType = mimeType;
    if (mimeType === 'text/html') this.isHTML = true;
    this.filter = filter;
    /** @type {StackItem[]} */
    this.stack = [];
    this.init = this.init.bind(this);
    this.init();
    
    // EVENTS
    /** @type {Listener} */
    this.addListener = super.addListener;
    /** @type {Emitter} */
    this.emit = super.emit;
    /** @type {Listener} */
    this.on = super.on;
    /** @type {Listener} */
    this.once = super.once;
    /** @type {Listener} */
    this.prependListener = super.prependListener;
    /** @type {Listener} */
    this.prependOnceListener = super.prependOnceListener;
    /** @type {Listener} */
    this.removeListener = super.removeListener;
    /** @type {Listener} */
    this.off = super.off;
  }

  newDocument () {
    let document;
    if (this.mimeType === 'text/html') {
      document = new HTMLDocument();
    } else if (this.mimeType === 'image/svg+xml') {
      document = new SVGDocument();
    } else {
      document = new XMLDocument();
    }
    if (this.doctype) document.doctype = this.doctype;
    this.stack.push({ document, node: document });
  }

  init ()  {
    this.content = new WritableStream({
      // <!DOCTYPE ...>
      onprocessinginstruction: (name, data) => {
        if (name.toLowerCase() === '!doctype') {
          this.doctype = data.slice(name.length).trim();
        }
      },
      // <tagName>
      onopentag: (name, attributes) => {
        if (this.filter(name, attributes)) this.newDocument()
        for (const item of this.stack) {
          const { document } = item;
          const { active, registry } = document[CUSTOM_ELEMENTS];
          let create = true;
          if (this.isHTML) {
            if (item.ownerSVGElement) {
              item.node = this.append(item.node, document.createElementNS(SVG_NAMESPACE, name), active);
              item.node.ownerSVGElement = item.ownerSVGElement;
              create = false;
            } else if (name === 'svg' || name === 'SVG') {
              item.ownerSVGElement = document.createElementNS(SVG_NAMESPACE, name);
              item.node = this.append(item.node, item.ownerSVGElement, active);
              create = false;
            } else if (active) {
              const ce = name.includes('-') ? name : (attributes.is || '');
              if (ce && registry.has(ce)) {
                const {Class} = registry.get(ce);
                item.node = this.append(item.node, new Class, active);
                delete attributes.is;
                create = false;
              }
            }
          }
          if (create) item.node = this.append(item.node, document.createElement(name), false);
          let end = item.node[END];
          for (const name of keys(attributes)) {
            this.attribute(item.node, end, document.createAttribute(name), attributes[name], active);
          }
          if (!item.rootNode) item.rootNode = item.node;
        }
      },
      // #text, #comment
      oncomment: (data) => {
        for (const { document, node } of this.stack) {
          const { active } = document[CUSTOM_ELEMENTS];
          this.append(node, document.createComment(data), active);
        }
      },
      ontext: (text) => {
        for (const { document, node } of this.stack) {
          const { active } = document[CUSTOM_ELEMENTS];
          this.append(node, document.createTextNode(text), active);
        }
      },
      // </tagName>
      onclosetag: () => {
        for (const item of this.stack) {
          const { document } = item
          if (this.isHTML && item.node === item.ownerSVGElement) {
            item.ownerSVGElement = undefined;
          }
          if (item.node === item.rootNode) {
            this.emit('document', document);
            this.stack.length -= 1;
          }
          item.node = item.node.parentNode;
        }
      }
    }, {
      lowerCaseAttributeNames: false,
      decodeEntities: true,
      xmlMode: !this.isHTML
    })
  }

  /**
   * @param {string|Buffer} chunk 
   * @param {string} encoding 
   * @param {() => void} callback 
   */
  _write(chunk, encoding, callback) {
    this.content._write(chunk, encoding, callback);
  }

  /**
   * @param {() => void} callback 
   */
  _final(callback) {
    this.content._final(callback);
  }

  append (self, node, active) {
    const end = self[END];
    node.parentNode = self;
    knownBoundaries(end[PREV], node, end);
    if (active && node.nodeType === ELEMENT_NODE)
      connectedCallback(node);
    return node;
  }

  attribute (element, end, attribute, value, active) {
    attribute[VALUE] = value;
    attribute.ownerElement = element;
    knownSiblings(end[PREV], attribute, end);
    if (attribute.name === 'class')
      element.className = value;
    if (active)
      attributeChangedCallback(element, attribute.name, null, value);
  }
}
exports.DOMStream = DOMStream