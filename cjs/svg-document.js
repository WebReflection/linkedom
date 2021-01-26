'use strict';
const {Document} = require('./document.js');

/**
 * @implements globalThis.SVGDocument
 */
class SVGDocument extends Document {

  constructor() {
    super('image/svg+xml');
  }
}
exports.SVGDocument = SVGDocument
