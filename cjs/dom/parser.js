'use strict';
const {DOM_PARSER} = require('../shared/symbols.js');
const {parseFromString} = require('../shared/parse-from-string.js');

const {HTMLDocument} = require('../html/document.js');
const {SVGDocument} = require('../svg/document.js');
const {XMLDocument} = require('../xml/document.js');
const {JSXDocument} = require('../jsx/document.js');

/**
 * @implements globalThis.DOMParser
 */
class DOMParser {

  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument, "text/jsx+xml": JSXDocument }} MimeToDoc */
  /**
   * @template {keyof MimeToDoc} MIME
   * @param {string} markupLanguage
   * @param {MIME} mimeType
   * @returns {MimeToDoc[MIME]}
   */
  parseFromString(markupLanguage, mimeType) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else if (mimeType === 'text/jsx+xml') {
      document = new JSXDocument;
      isHTML = true;
    }
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}
exports.DOMParser = DOMParser
