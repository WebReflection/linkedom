import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLMapElement
 */
export class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}
