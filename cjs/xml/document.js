'use strict';
const {MIME} = require('../shared/symbols.js');
const {Document} = require('../interface/document.js');

/**
 * @implements globalThis.XMLDocument
 */
class XMLDocument extends Document {
  constructor(mimeType = 'text/xml') { super(mimeType); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
exports.XMLDocument = XMLDocument
