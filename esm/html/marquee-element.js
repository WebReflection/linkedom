import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLMarqueeElement
 */
export class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}
