'use strict';
const {DOCUMENT_TYPE_NODE} = require('../shared/constants.js');
const {documentTypeAsJSON} = require('../shared/jsdon.js');

const {Node} = require('./node.js');

/**
 * @implements globalThis.DocumentType
 */
class DocumentType extends Node {
  constructor(ownerDocument, name) {
    super(ownerDocument, '#document-type', DOCUMENT_TYPE_NODE);
    this.name = name;
  }

  cloneNode() {
    const {ownerDocument, name} = this;
    return new DocumentType(ownerDocument, name);
  }

  toString() { return `<!DOCTYPE ${this.name}>`; }
  toJSON() {
    const json = [];
    documentTypeAsJSON(this, json);
    return json;
  }
}
exports.DocumentType = DocumentType
