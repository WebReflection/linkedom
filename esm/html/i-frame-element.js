import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLIFrameElement
 */
export class HTMLIFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'iframe') {
    super(ownerDocument, localName);
  }
}
