import {DOCUMENT_TYPE_NODE} from '../shared/constants.js';
import {documentTypeAsJSON} from '../shared/jsdon.js';

import {Node} from './node.js';

/**
 * @implements globalThis.DocumentType
 */
export class DocumentType extends Node {
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
