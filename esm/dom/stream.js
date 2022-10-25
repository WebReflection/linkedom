import {Writable} from 'stream';
import {WritableStream} from 'htmlparser2/lib/WritableStream';

import {ELEMENT_NODE, SVG_NAMESPACE} from '../shared/constants';
import {CUSTOM_ELEMENTS, PREV, END, VALUE} from '../shared/symbols';
import {keys} from '../shared/object';

import {knownBoundaries, knownSiblings} from '../shared/utils';
import {attributeChangedCallback, connectedCallback} from '../interface/custom-element-registry.js';

import {HTMLDocument} from '../html/document.js';
import {SVGDocument} from '../svg/document.js';
import {XMLDocument} from '../xml/document.js';

/**
 * @typedef {import('../interface/node').Node} Node
 * @typedef {import('../svg/element').SVGElement} SVGElement
 * @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc
 */

/**
 * @template {keyof MimeToDoc} MIME
 * @extends {Writable}
 */
export class DOMStream extends Writable {
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
    this.init = this.init.bind(this);
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
