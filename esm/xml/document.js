import {MIME} from '../shared/symbols.js';
import {Document} from '../interface/document.js';

/**
 * @implements globalThis.XMLDocument
 */
export class XMLDocument extends Document {
  constructor(mimeType = 'text/xml') { super(mimeType); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
