'use strict';
const {Document} = require('./document.js');

class SVGDocument extends Document {

  constructor() {
    super('image/svg+xml');
  }
}
exports.SVGDocument = SVGDocument;
