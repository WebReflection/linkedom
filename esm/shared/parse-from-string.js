import {WritableStream} from 'htmlparser2/lib/WritableStream';

import {
  onprocessinginstruction,  onopentag, oncomment, ontext, onclosetag
} from '../shared/parser-handlers'


// import {Mime} from './mime.js';
// const VOID_SOURCE = Mime['text/html'].voidElements.source.slice(4, -2);
// const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
// const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
// const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);

/**
 * @typedef {import('../html/document.js').HTMLDocument} HTMLDocument
 * @typedef {import('../svg/document.js').SVGDocument} SVGDocument
 * @typedef {import('../xml/document.js').XMLDocument} XMLDocument
 */

let notParsing = true;
export const isNotParsing = () => notParsing;

/**
 * @template {HTMLDocument|SVGDocument|XMLDocument} DOC
 * @template {string|NodeJS.ReadableStream} INPUT
 * @param {DOC} document 
 * @param {Boolean} isHTML 
 * @param {INPUT} markupLanguage 
 * @returns {INPUT extends string ? DOC : Promise<INPUT>}
 */
export const parseFromString = (document, isHTML, markupLanguage) => {
  /**
   * @type {{
   *   document: DOC
   *   node: DOC|Node
   *   ownerSVGElement: SVGElement|undefined
   *   rootNode: Node|undefined
   * }}
   */
  const item = { document, node: document }
  notParsing = false;

  const content = new WritableStream({
    // <!DOCTYPE ...>
    onprocessinginstruction(name, data) {
      document.doctype = onprocessinginstruction(name, data);
    },
    // <tagName>
    onopentag(name, attributes) {
      onopentag(name, attributes, item, isHTML);
    },
    // #text, #comment
    oncomment(data) {
      oncomment(data, item);
    },
    ontext(text) { 
      ontext(text, item);
    },
    // </tagName>
    onclosetag() {
     onclosetag(item, isHTML)
    }
  }, {
    lowerCaseAttributeNames: false,
    decodeEntities: true,
    xmlMode: !isHTML
  });

  if (typeof markupLanguage === 'string') {
    content.write(markupLanguage);
    content.end();
    notParsing = true;
    return item.document;
  } else {
    return new Promise((resolve, reject) => {
      markupLanguage.pipe(content);
      markupLanguage.once('end', () => {
        notParsing = true;
        resolve(item.document);
      });
      const errorCb = err => {
        content.end();
        notParsing = true;
        reject(err);
      }
      markupLanguage.once('error', errorCb);
      content.once('error', errorCb);
    });
  }
};
