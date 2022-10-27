'use strict';
const {Writable} = require('stream');
const {WritableStream} = require('htmlparser2/lib/WritableStream');

const {append, attribute} = require('../shared/parse-from-string');
const {SVG_NAMESPACE} = require('../shared/constants');
const {CUSTOM_ELEMENTS, END} = require('../shared/symbols');
const {keys} = require('../shared/object');

const {HTMLDocument} = require('../html/document.js');
const {SVGDocument} = require('../svg/document.js');
const {XMLDocument} = require('../xml/document.js');


/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */

/**
 * @template {keyof MimeToDoc} MIME
 * @extends {Writable}
 */
class DOMStream extends Writable {
  /**
   * @param {MIME} mimeType
   * @param {(name: string, attributes: Record<string, string>) => boolean} filter
   */
  constructor (mimeType, filter) {
    super();
    this.mimeType = mimeType;
    if (mimeType === 'text/html') this.isHTML = true;
    this.filter = filter;
    /**
     * @type {{
     *   document: MimeToDoc[MIME]
     *   node: MimeToDoc[MIME]|Node
     *   ownerSVGElement: SVGElement|undefined
     *   rootNode: Node
     * }[]}
     */
    this.stack = [];
    this.init();
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
    this.parserStream = new WritableStream({
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
      },
      // #text, #comment
      oncomment: (data) => {
        for (const { document, node } of this.stack) {
          const { active } = document[CUSTOM_ELEMENTS];
          append(node, document.createComment(data), active);
        }
      },
      ontext: (text) => {
        for (const { document, node } of this.stack) {
          const { active } = document[CUSTOM_ELEMENTS];
          append(node, document.createTextNode(text), active);
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
    this.parserStream.on('error', err => this.emit('error', err))
  }

  /**
   * @param {string|Buffer} chunk 
   * @param {string} encoding 
   * @param {() => void} callback 
   */
  _write(chunk, encoding, callback) {
    this.parserStream._write(chunk, encoding, callback);
  }

  /**
   * @param {() => void} callback 
   */
  _final(callback) {
    this.parserStream._final(callback);
  }

  /**
   * An alias for `docStream.on('document', doc => {...})`
   * @param {(doc: MimeToDoc[MIME]) => void} listener 
   */
  ondocument (listener) {
    this.on('document', listener)
    return this
  }

  /**
   * An alias for `docStream.on('error', err => {...})`
   * or `docStream.parserStream.on('error', err => {...})` 
   * @param {(err: Error) => void} listener 
   */
  onerror (listener) {
    this.on('error', listener)
    return this
  }  
}
exports.DOMStream = DOMStream
