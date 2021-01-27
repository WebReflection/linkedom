import {Element} from './element.js';

/**
 * @implements globalThis.HTMLElement
 */
export class HTMLElement extends Element {
  // flipped to allow empty constructor and/or a global document
  constructor(localName = 'element', ownerDocument = globalThis.document) {
    super(ownerDocument, localName);
  }
}
