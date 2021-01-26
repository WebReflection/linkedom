'use strict';
const {Document} = require('./document.js');

/**
 * @implements globalThis.XMLDocument
 */
class XMLDocument extends Document {

  constructor() {
    super('text/xml');
  }
}
exports.XMLDocument = XMLDocument
