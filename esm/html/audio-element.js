import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLAudioElement
 */
export class HTMLAudioElement extends HTMLElement {
  constructor(ownerDocument, localName = 'audio') {
    super(ownerDocument, localName);
  }
}
