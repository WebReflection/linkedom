import {HTMLElement} from './element.js';
import {registerHTMLClass} from "../shared/register-html-class.js";

const tagName = 'marquee';

/**
 * @implements globalThis.HTMLMarqueeElement
 */
export class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLMarqueeElement);
