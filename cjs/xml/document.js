'use strict';
const {MIME} = require('../shared/symbols.js');
const {Document} = require('../interface/document.js');

class XMLDocument extends Document {
  constructor() { super('text/xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
exports.XMLDocument = XMLDocument
