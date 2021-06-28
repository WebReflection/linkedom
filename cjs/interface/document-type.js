'use strict';
const {DOCUMENT_TYPE_NODE} = require('../shared/constants.js');
const {documentTypeAsJSON} = require('../shared/jsdon.js');

const {Node} = require('./node.js');

/**
 * @implements globalThis.DocumentType
 */
class DocumentType extends Node {
  constructor(ownerDocument, name, publicId = '', systemId = '') {
    super(ownerDocument, '#document-type', DOCUMENT_TYPE_NODE);
    this.name = name;
    this.publicId = publicId;
    this.systemId = systemId;
  }

  cloneNode() {
    const {ownerDocument, name, publicId, systemId} = this;
    return new DocumentType(ownerDocument, name, publicId, systemId);
  }

  toString() {
    const {name, publicId, systemId} = this;
    const hasPublic = 0 < publicId.length;
    const str = [name];
    if (hasPublic)
      str.push('PUBLIC', `"${publicId}"`);
    if (systemId.length) {
      if (!hasPublic)
        str.push('SYSTEM');
      str.push(`"${systemId}"`);
    }
    return `<!DOCTYPE ${str.join(' ')}>`;
  }

  toJSON() {
    const json = [];
    documentTypeAsJSON(this, json);
    return json;
  }
}
exports.DocumentType = DocumentType
