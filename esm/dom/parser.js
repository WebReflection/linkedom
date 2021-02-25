import {DOM_PARSER} from '../shared/symbols.js';
import {parseFromString} from '../shared/parse-from-string.js';

import {HTMLDocument} from '../html/document.js';
import {SVGDocument} from '../svg/document.js';
import {XMLDocument} from '../xml/document.js';

/**
 * @implements globalThis.DOMParser
 */
export class DOMParser {

  /**
   * @param {string} markupLanguage 
   * @param {"text/html"|"image/svg+xml"|"text/xml"} mimeType
   * @returns {HTMLDocument|SVGDocument|XMLDocument}
   */
  parseFromString(markupLanguage, mimeType) {
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
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}
