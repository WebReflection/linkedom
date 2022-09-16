import {DOM_PARSER, GLOBALS} from '../shared/symbols.js';
import {parseFromString} from '../shared/parse-from-string.js';

import {HTMLDocument} from '../html/document.js';
import {SVGDocument} from '../svg/document.js';
import {XMLDocument} from '../xml/document.js';

/**
 * @implements globalThis.DOMParser
 */
export class DOMParser {

  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
  /**
   * @template {keyof MimeToDoc} MIME
   * @param {string} markupLanguage
   * @param {MIME} mimeType
   * @returns {MimeToDoc[MIME]}
   */
  parseFromString(markupLanguage, mimeType, globals = null) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    if (globals)
      document[GLOBALS] = globals;
    if (isHTML && markupLanguage === '...')
      markupLanguage = '<!doctype html><html><head></head><body></body></html>';
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}
