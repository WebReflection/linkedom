import {Document} from '../interface/document.js';

/**
 * @implements globalThis.JSXDocument
 */
export class JSXDocument extends Document {
  constructor() { super('text/jsx+xml'); }
}
