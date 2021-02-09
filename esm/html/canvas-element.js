import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLCanvasElement
 */
export class HTMLCanvasElement extends HTMLElement {
  constructor(ownerDocument, localName = 'canvas') {
    super(ownerDocument, localName);
  }
}
