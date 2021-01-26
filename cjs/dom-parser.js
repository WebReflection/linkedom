'use strict';
const {parseFromString} = require('./utils.js');
const {HTMLDocument} = require('./html-document.js');
const {SVGDocument} = require('./svg-document.js');
const {XMLDocument} = require('./xml-document.js');

module.exports = class DOMParser {
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
    return parseFromString(document, isHTML, markupLanguage);
  }
}
