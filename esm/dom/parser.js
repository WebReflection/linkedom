import {DOM_PARSER} from '../shared/symbols.js';
import {parseFromString} from '../shared/parse-from-string.js';

import {HTMLDocument} from '../html/document.js';
import {SVGDocument} from '../svg/document.js';
import {XMLDocument} from '../xml/document.js';
import {MIME} from '../shared/symbols.js';

/**
 * @implements globalThis.DOMParser
 */
export class DOMParser {

  /** @typedef {{ "text/html": HTMLDocument, "image/svg+xml": SVGDocument, "text/xml": XMLDocument }} MimeToDoc */
  /** @typedef {{ [x: symbol]: unknown, [MIME] : string }} Config */
  /**
   * @template {keyof MimeToDoc} MIME
   * @param {string} markupLanguage
   * @param {Config | string} config
   * @returns {MimeToDoc[MIME]}
   */
  parseFromString(markupLanguage, config) {
    const [mimeType, domOptions] = ((c) => {
      if (typeof c === 'object') {
        const {[MIME]: mime, ...rest} = c;
        return [mime || 'text/html', rest]
      }
      return [c, {}]
    })(config);
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument(domOptions);
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}
