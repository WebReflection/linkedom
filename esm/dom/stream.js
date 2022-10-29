import {Writable} from 'stream';
import {WritableStream} from 'htmlparser2/lib/WritableStream';

import {
  onprocessinginstruction,  onopentag, oncomment, ontext, onclosetag
} from '../shared/parser-handlers'

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
     *   rootNode: Node|undefined
     * }[]}
     */
    this.stack = []; // LIFO
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
        this.doctype = onprocessinginstruction(name, data);
      },
      // <tagName>
      onopentag: (name, attributes) => {
        if (this.filter(name, attributes)) this.newDocument();
        for (const item of this.stack) {
          onopentag(name, attributes, item, this.isHTML);
        }
      },
      // #text, #comment
      oncomment: (data) => {
        for (const item of this.stack) {
          oncomment(data, item);
        }
      },
      ontext: (text) => {
        for (const item of this.stack) {
          ontext(text, item);
        }
      },
      // </tagName>
      onclosetag: () => {
        for (const item of this.stack) {
          onclosetag(item, this.isHTML, document => {
            this.emit('document', document);
            this.stack.length -= 1;
          })
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
