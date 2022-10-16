import {HTMLElement} from './element.js';

export class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}
