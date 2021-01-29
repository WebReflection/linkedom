import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLLegendElement
 */
export class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}
