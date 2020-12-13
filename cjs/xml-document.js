'use strict';
const {Document} = require('./document.js');

class XMLDocument extends Document {
  constructor() {
    super('text/xml');
  }
}
exports.XMLDocument = XMLDocument;
