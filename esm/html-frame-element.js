import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLFrameElement
 */
export class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}
