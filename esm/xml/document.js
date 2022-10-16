import {MIME} from '../shared/symbols.js';
import {Document} from '../interface/document.js';

export class XMLDocument extends Document {
  constructor() { super('text/xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
