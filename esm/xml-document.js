import {Document} from './document.js';

/**
 * @implements globalThis.XMLDocument
 */
export class XMLDocument extends Document {

  constructor() {
    super('text/xml');
  }
}
