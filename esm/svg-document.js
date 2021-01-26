import {Document} from './document.js';

/**
 * @implements globalThis.SVGDocument
 */
export class SVGDocument extends Document {

  constructor() {
    super('image/svg+xml');
  }
}
