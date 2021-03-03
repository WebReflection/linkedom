'use strict';
const {MIME} = require('../shared/symbols.js');
const {Document} = require('../interface/document.js');

/**
 * @implements globalThis.Document
 */
class SVGDocument extends Document {
  constructor() { super('image/svg+xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
exports.SVGDocument = SVGDocument
